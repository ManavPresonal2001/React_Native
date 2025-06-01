module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	rules: {
		'no-console': ['error'],
		'no-warning-comments': ['error', { terms: ['console'], location: 'start' }],
		'@typescript-eslint/no-require-imports': 'off',
		'react-native/sort-styles': 'off',
		'react-native/no-inline-styles': 'off',
	},
};
