module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  globals: {
    process: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['react', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    quotes: [
      'warn',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'jsx-quotes': ['warn', 'prefer-single'],
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['warn', 'always'],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/newline-after-import': ['warn', { count: 1 }],
    'prettier/prettier': 'warn',
  },
};
