/** @type {import('@commitlint/types').UserConfig} */
const Configuration: import('@commitlint/types').UserConfig = {
	rules: {
		'type-enum': [2, 'always', ['Feat', 'Fix', 'Chore']],
		'type-case': [2, 'always', 'pascal-case'],
		'subject-case': [0],
	},
};

module.exports = Configuration;
