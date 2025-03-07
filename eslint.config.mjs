
import { FlatCompat } from "@eslint/eslintrc";
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import reactHooks from 'eslint-plugin-react-hooks'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: typescript.configs.recommended
});

const eslintConfig = [
  {
    plugins: {
      '@typescript-eslint': typescript,
      'react-hooks': reactHooks
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      ...typescript.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@next/next/no-duplicate-head': 'off', // Disable the problematic rule
      '@typescript-eslint/no-unsafe-declaration-merging': 'off'

    }
  },
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',

    ]
  })
];

export default eslintConfig;
