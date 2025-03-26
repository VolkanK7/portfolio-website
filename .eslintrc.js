module.exports = {
   extends: 'next/core-web-vitals',
   rules: {
      '@next/next/no-img-element': 'off',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': [
         'error',
         {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
         },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
   },
};
