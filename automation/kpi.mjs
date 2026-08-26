#!/usr/bin/env node
// ==========================================================
// 週次 KPI レポート生成
//   入力: automation/products.json, automation/revenue-log.csv
//   出力: automation/reports/YYYY-MM-DD.md（標準出力にも同内容）
//
//   使い方:  node automation/kpi.mjs [--as-of=YYYY-MM-DD] [--no-write]
//   依存パッケージなし（Node 18+ の標準機能のみ）
// ==========================================================

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const yen = (n) => '¥' + Math.round(n).toLocaleString('ja-JP');
const day = 86400000;

// ---------- 引数 ----------
const args = process.argv.slice(2);
const asOfArg = args.find((a) => a.startsWith('--as-of='))?.slice(8);
const noWrite = args.includes('--no-write');
const asOf = asOfArg ? new Date(`${asOfArg}T00:00:00Z`) : new Date(new Date().toISOString().slice(0, 10) + 'T00:00:00Z');
if (Number.isNaN(asOf.getTime())) { console.error('--as-of は YYYY-MM-DD 形式で指定してください'); process.exit(1); }
const iso = (d) => d.toISOString().slice(0, 10);

// ---------- 入力 ----------
const master = JSON.parse(readFileSync(join(HERE, 'products.json'), 'utf8'));
const byId = new Map(master.products.map((p) => [p.id, p]));
const targetWeekly = master.targetWeeklyYen;
const targetMonthly = targetWeekly * (365 / 7 / 12); // 週次目標を月額に換算（≒4.345週）

// CSV は「入金1件 = 1行」。カンマを含む値は使わない前提の素朴なパーサ。
const rows = readFileSync(join(HERE, 'revenue-log.csv'), 'utf8')
  .split('\n').map((l) => l.trim()).filter(Boolean).slice(1)
  .map((line, i) => {
    const [date, product_id, customer, amount_yen, ...rest] = line.split(',');
    const p = byId.get(product_id);
    if (!p) throw new Error(`revenue-log.csv ${i + 2}行目: 未知の product_id "${product_id}"（products.json に定義してください）`);
    const amount = Number(amount_yen);
    if (!Number.isFinite(amount)) throw new Error(`revenue-log.csv ${i + 2}行目: amount_yen が数値ではありません`);
    return { date, product: p, customer, amount, note: rest.join(',') };
  });

// ---------- 集計 ----------
// 直近28日を「1か月」とみなす。週次目標との比較は 28日実績 ÷ 4 の週次ランレートで行う。
const windowRows = (days) => {
  const from = new Date(asOf.getTime() - (days - 1) * day);
  return rows.filter((r) => {
    const d = new Date(`${r.date}T00:00:00Z`);
    return d >= from && d <= asOf;
  });
};
const sum = (rs) => rs.reduce((a, r) => a + r.amount, 0);

const w1 = windowRows(7), w4 = windowRows(28), wPrev4 = (() => {
  const from = new Date(asOf.getTime() - 55 * day), to = new Date(asOf.getTime() - 28 * day);
  return rows.filter((r) => { const d = new Date(`${r.date}T00:00:00Z`); return d >= from && d <= to; });
})();

const recurring4 = sum(w4.filter((r) => r.product.type === 'recurring'));
const flow4 = sum(w4.filter((r) => r.product.type === 'flow'));
const runRateWeekly = sum(w4) / 4;
const achievement = targetWeekly ? runRateWeekly / targetWeekly : 0;
const gapMonthly = Math.max(0, targetMonthly - sum(w4));
const growth = sum(wPrev4) ? (sum(w4) - sum(wPrev4)) / sum(wPrev4) : null;

// recurring 比率 = 売上の「床」。ここが高いほど週次収入が安定する。
const recurringShare = sum(w4) ? recurring4 / sum(w4) : 0;

// ---------- 出力 ----------
const bar = (r) => { const n = Math.max(0, Math.min(20, Math.round(r * 20))); return '█'.repeat(n) + '░'.repeat(20 - n); };
const L = [];
L.push(`# 週次収益レポート — ${iso(asOf)}`, '');
L.push(`| 指標 | 実績 | 目標 |`, `| --- | --- | --- |`);
L.push(`| 週次ランレート（直近28日÷4） | **${yen(runRateWeekly)}** | ${yen(targetWeekly)} |`);
L.push(`| 直近7日の入金 | ${yen(sum(w1))} | — |`);
L.push(`| 直近28日の入金 | ${yen(sum(w4))} | ${yen(targetMonthly)} |`);
L.push(`| うち継続課金（recurring） | ${yen(recurring4)}（${Math.round(recurringShare * 100)}%） | 60%以上 |`);
L.push(`| うち都度売上（flow） | ${yen(flow4)} | — |`);
if (growth !== null) L.push(`| 前28日比 | ${growth >= 0 ? '+' : ''}${Math.round(growth * 100)}% | — |`);
L.push('', `**達成率 ${Math.round(achievement * 100)}%**  \`${bar(achievement)}\``, '');

L.push('## 商品別（直近28日）', '', `| 事業 | 商品 | 単価 | 件数 | 目標件数 | 売上 |`, `| --- | --- | ---: | ---: | ---: | ---: |`);
for (const p of master.products) {
  const rs = w4.filter((r) => r.product.id === p.id);
  L.push(`| ${p.unit} | ${p.name} | ${yen(p.price)} | ${rs.length} | ${p.targetCount} | ${yen(sum(rs))} |`);
}
L.push('');

if (gapMonthly > 0) {
  L.push('## 不足分の埋め方（月額ギャップの単品換算）', '');
  L.push(`目標まで月 **${yen(gapMonthly)}** 不足。どれか1つで埋めるなら:`, '');
  for (const p of master.products) L.push(`- ${p.unit} ${p.name} … あと **${Math.ceil(gapMonthly / p.price)}件**`);
  L.push('', '> 実際には1商品で埋めず、継続課金（Re.Lab / Event Lab）を床にして、都度売上（Re.Com / Regional.）を上乗せする配分にする。');
} else {
  L.push('## 状態', '', '週10万円の目標を達成中。次は recurring 比率を上げて、月ごとのブレを潰す局面。');
}
L.push('', '---', `_自動生成: \`node automation/kpi.mjs\` — 入力は automation/revenue-log.csv_`);

const out = L.join('\n') + '\n';
console.log(out);
if (!noWrite) {
  mkdirSync(join(HERE, 'reports'), { recursive: true });
  const path = join(HERE, 'reports', `${iso(asOf)}.md`);
  writeFileSync(path, out);
  console.error(`書き出し: ${path}`);
}
