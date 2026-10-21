#!/bin/bash
# JSX を事前コンパイルして *.js を生成する。node は不要。
# 使い方:  bash tools/build.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BABEL_VERSION="7.29.0"
BABEL_SHA384="m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y"
BABEL="${TMPDIR:-/tmp}/babel-standalone-${BABEL_VERSION}.min.js"

if [ ! -f "$BABEL" ]; then
  echo "Babel ${BABEL_VERSION} を取得中…"
  curl -sL "https://unpkg.com/@babel/standalone@${BABEL_VERSION}/babel.min.js" -o "$BABEL"
fi

GOT="$(openssl dgst -sha384 -binary "$BABEL" | openssl base64 -A)"
if [ "$GOT" != "$BABEL_SHA384" ]; then
  echo "中断: Babel のハッシュが一致しません（改ざん or バージョン違い）"
  echo "  期待: $BABEL_SHA384"
  echo "  実際: $GOT"
  rm -f "$BABEL"
  exit 1
fi
echo "Babel のハッシュ照合 OK"

osascript -l JavaScript "$ROOT/tools/build.jxa.js" "$ROOT" "$BABEL"
echo "完了。index.html は *.js を読み込みます（*.jsx は編集用の原稿）。"
