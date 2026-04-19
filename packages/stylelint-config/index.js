/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-recess-order", "stylelint-config-html"],
  cache: true,
  fix: true,
  rules: {
    "length-zero-no-unit": true,
    "color-hex-length": "short",
    "color-function-notation": "modern",
    "font-weight-notation": "numeric",
    "function-name-case": "lower",
    "selector-type-case": "lower",
    "value-keyword-case": "lower",
  },
};
