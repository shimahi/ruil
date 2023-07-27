/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
  ],
  overrides: [
    {
      files: ["*.js"],
      rules: { "@typescript-eslint/no-var-requires": ["off"] },
    },
  ],
  plugins: ["react", "react-hooks", "simple-import-sort", "jsx-a11y"],
  env: {
    node: true,
    es2023: true,
    browser: true,
  },
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  ignorePatterns: [".eslintrc.js", "vite.config.ts"],
  rules: {
    "global-require": "off",
    "consistent-return": "off",
    "newline-before-return": "error",
    "no-console": "off",
    "no-restricted-syntax": "off",
    "no-unused-expressions": ["error", { allowShortCircuit: true }],
    "no-underscore-dangle": "off",
    "no-nested-ternary": "off",
    "no-unused-vars": "off",
    "arrow-body-style": "off",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "no-case-declarations": "off",
    "no-useless-escape": "off",
    "@typescript-eslint/no-throw-literal": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { varsIgnorePattern: "_", argsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        filter: { regex: "^_|__", match: false },
      },
      { selector: "function", format: ["camelCase", "PascalCase"] },
      { selector: "typeLike", format: ["PascalCase"] },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      { extendDefaults: true, types: { "{}": false } },
    ],
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["src/**/*.stories.tsx"], peerDependencies: false },
    ],
    /**
     * 以下、フロントエンド単体の設定
     */
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "react/jsx-one-expression-per-line": "warn",
    "react/jsx-wrap-multilines": "off",
    "react/no-array-index-key": "off",
    "react/display-name": "off",
    "react/button-has-type": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/require-default-props": "off",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "off",
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/img-redundant-alt": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/interactive-supports-focus": "off",
  },
  settings: {
    react: { version: "detect" },
  },
};