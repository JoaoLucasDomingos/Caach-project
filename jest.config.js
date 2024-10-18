module.exports = {
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    transform: {
      '^.+\\.(ts|html)$': 'ts-jest', // Use ts-jest para arquivos TypeScript
    },
    moduleNameMapper: {
      // Mapeia os estilos e outras extensões não JavaScript
      '\\.(css|scss)$': 'identity-obj-proxy',
    },
  };
  