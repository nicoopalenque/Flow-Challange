module.exports = {
	collectCoverageFrom: [
		'src/**/*.{ts,js}',
		'!src/**/*.d.js',
		'!src/index.js',
		'!src/common/**/*.js',
		'!src/domain/health/**/*.js',
	],
	coverageDirectory: 'coverage',
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90,
		},
	},
	moduleFileExtensions: ['ts', 'json', 'js', 'node'],
	modulePaths: ['<rootDir>'],
	modulePathIgnorePatterns: ['<rootDir>/src/infrastructure'],
	rootDir: './',
	testEnvironment: 'node',
	testRegex: '.*\\.test\\.js$',
}