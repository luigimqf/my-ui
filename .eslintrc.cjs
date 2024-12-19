module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "eslint-config-prettier",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "**/modules/**",
    "node_modules",
    "public",
    "package-lock.json",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "react-hooks",
    "react-refresh",
    "@typescript-eslint",
    "import",
    "prettier",
  ],
  rules: {
    "no-undef": "off",
    "arrow-parens": [2, "as-needed"],
    "react/boolean-prop-naming": [
      "warn",
      {
        rule: "^(is|has|should|can|with)[A-Z]([A-Za-z0-9]?)+",
      },
    ],
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        multiline: "last",
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "react-refresh/only-export-components": "off",
    "react-hooks/exhaustive-deps": "off",
    "arrow-body-style": 0,
    "prefer-arrow-callback": 0,
    "func-style": "warn",
    "no-iterator": "warn",
    "no-restricted-syntax": "warn",
    "no-restricted-globals": "off",
    "no-bitwise": "off",
    "no-shadow": "off",
    "react/prop-types": "off",
    "import/namespace": "off",
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "never",
      {
        ignorePackages: true,
        pattern: {
          structure: "always",
          model: "always",
        },
      },
    ],
    "import/no-extraneous-dependencies": "error",
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        "alphabetize": {
          order: "asc",
        },
        "pathGroups": [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "distinctGroup": true,
      },
    ],
    "react/jsx-closing-bracket-location": "error",
    "no-use-before-define": ["off"],
    "import/no-cycle": [2, { ignoreExternal: false }],
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "ignore", propElementValues: "ignore" },
    ],
    "prefer-template": "error",
    "import/no-named-as-default": "error",
    "curly": ["error", "all"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};