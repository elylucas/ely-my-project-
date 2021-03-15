export default {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: {
        // warnOnly: true,
      },
      tsconfig: {
        types: ['node', 'jest'],
      },
    },
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@ely-my-project)'
  ],
};
