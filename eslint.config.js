import {defineConfig, globalIgnores} from 'eslint/config'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import reactPlugin from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'

export default defineConfig([
    globalIgnores(['dist', 'demo/dist']),
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2025,
            globals: globals.browser,
            parserOptions: {ecmaVersion: 2025, sourceType: 'module'},
            parser: tsParser,
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            react: reactPlugin,
            'react-hooks': hooksPlugin,
            'react-refresh': reactRefreshPlugin,
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
            '@typescript-eslint/no-unused-expressions': 'error',

            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error',
            'react-refresh/only-export-components': 'error',

            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
        },
    },
])
