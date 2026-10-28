// ---------------------------------------------------------------
// JSX → JS 事前コンパイラ（node 不要・macOS 標準の osascript で動く）
// 使い方: bash tools/build.sh （直接実行せず build.sh から呼ばれる）
// 引数:  $1 = サイトのルート, $2 = babel.min.js のパス
// ---------------------------------------------------------------
ObjC.import('Foundation');

function read(path) {
  var s = $.NSString.stringWithContentsOfFileEncodingError($(path), $.NSUTF8StringEncoding, null);
  if (!s) throw new Error('読み込み失敗: ' + path);
  return ObjC.unwrap(s);
}
function write(path, text) {
  var ok = $(text).writeToFileAtomicallyEncodingError($(path), true, $.NSUTF8StringEncoding, null);
  if (!ok) throw new Error('書き込み失敗: ' + path);
}

function run(argv) {
  var ROOT = argv[0], BABEL = argv[1];
  var FILES = [
    'i18n', 'site-data', 'site-data-en', 'shared', 'backdrop',
    'variant-b-sai', 'variant-b-pages', 'variant-b-contact',
    'business-page', 'mobile-site', 'app',
  ];

  eval(read(BABEL)); // Babel をこのプロセス内に読み込む（ブラウザには配信しない）

  var report = [];
  FILES.forEach(function (name) {
    var src = read(ROOT + '/' + name + '.jsx');
    // sourceType:'script' … 従来どおり「通常のスクリプト」として実行させるため。
    // モジュール扱いにすると "use strict" が付き、関数宣言がグローバルに出なくなる。
    var out = Babel.transform(src, {
      presets: ['react'],
      sourceType: 'script',
      compact: false,
      comments: true,
    }).code;
    var header = '// 自動生成ファイル — 編集しないでください。編集は ' + name + '.jsx を直し、bash tools/build.sh を実行。\n';
    write(ROOT + '/' + name + '.js', header + out + '\n');
    report.push(name + '.jsx → ' + name + '.js  (' + src.length + ' → ' + out.length + ' 文字)');
  });
  return report.join('\n');
}
