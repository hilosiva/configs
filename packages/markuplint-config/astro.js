/** @type {import('markuplint').Config} */
export default {
  parser: {
    "\\.astro$": "@markuplint/astro-parser",
  },
  extends: ["markuplint:recommended"],
  rules: {
    // インライン JS（onclick 等）は禁止。JS は外部ファイルで管理する
    "no-use-event-handler-attr": true,
  },
  nodeRules: [
    {
      // hgroup の中に Astro コンポーネントを入れると静的解析できず
      // "見出しがない" と判定されるため permitted-contents を無効化
      selector: "hgroup",
      rules: {
        "permitted-contents": false,
      },
    },
    {
      // <script async> など async 属性が付いた要素の required-attr を無効化
      selector: "[async]",
      rules: {
        "required-attr": false,
      },
    },
  ],
  overrides: {
    "./src/components/**/*.astro": {
      rules: {
        // コンポーネントは h3 から始まることがあるため h1 必須を無効化
        "required-h1": false,
        // コンポーネント単体での見出し階層チェックは意味をなさないため無効化
        "heading-levels": false,
      },
    },
    "./src/layouts/**/*.astro": {
      rules: {
        // レイアウトは page から h1 を受け取るため h1 必須を無効化
        "required-h1": false,
      },
    },
  },
};
