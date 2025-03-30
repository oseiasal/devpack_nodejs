module.exports = {
    // Ignora a pasta node_modules durante os testes
    modulePathIgnorePatterns: ['<rootDir>/node_modules/'],

    // Configura a transformações de arquivos (usado principalmente para Babel, mas pode ser útil dependendo do seu projeto)
    transform: {
        '^.+\\.js$': 'babel-jest',  // Usar babel-jest para transformar os arquivos
    },
    transformIgnorePatterns: ['/node_modules/'],

    // Configuração para usar os testes em arquivos .test.js
    testMatch: ['**/?(*.)+(spec|test).js'],

    // Define os diretórios onde o Jest deve procurar os arquivos de testes
    roots: ['<rootDir>/src'],  // Onde ele vai procurar os arquivos de teste

    // Configura a cobertura de testes (opcional)
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js'],  // Diretórios onde ele deve coletar a cobertura de testes

    // Ignora arquivos de testes específicos ou pastas que você não quer testar
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
