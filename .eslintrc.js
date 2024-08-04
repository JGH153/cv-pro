module.exports = {
  plugins: ["@typescript-eslint", "jsx-a11y"],
  parser: "@typescript-eslint/parser",
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  ignorePatterns: [
    "node_modules",
    "public",
    "styles",
    "jest.config.js",
    "tailwind.config.js",
    "postcss.config.js",
    "next.config.js",
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-param-reassign": "error",
    curly: ["error", "all"],
    eqeqeq: "error",
    "prefer-object-has-own": "error",
    // Needed? TODO?
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
};
