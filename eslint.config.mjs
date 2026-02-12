import next from 'eslint-config-next/core-web-vitals';

const baseConfig = Array.isArray(next) ? next : [next];

const config = [
  {
    ignores: ['**/.vercel/**', '**/out/**'],
  },
  ...baseConfig,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default config;
