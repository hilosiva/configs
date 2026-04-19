/** @type {import('markuplint').Config} */
export default {
  parser: {
    "\\.php$": "@markuplint/php-parser",
  },
  extends: ["markuplint:recommended"],
  rules: {},
  overrides: {
    "./**/*.php": {
      rules: {
        // PHP テンプレートは部分的な HTML になるため無効化
        "required-h1": false,
        "character-reference": false,
        "permitted-contents": false,
      },
      nodeRules: [
        {
          // PHP テンプレートの html タグは属性が動的なため無効化
          selector: "html",
          rules: {
            "invalid-attr": false,
            "required-attr": false,
          },
        },
        {
          // PHP テンプレートの head は部分的なため無効化
          selector: "head",
          rules: {
            "required-element": false,
          },
        },
      ],
    },
  },
};
