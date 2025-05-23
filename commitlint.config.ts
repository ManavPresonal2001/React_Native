/** @type {import('@commitlint/types').UserConfig} */
const Configuration = {
	rules: {
		'type-enum': [2, 'always', ['Feat', 'Fix', 'Chore']],

		'type-case': [2, 'always', 'pascal-case'],
		// 'type-colon-space': [2, 'always'],

		'subject-case': [2, 'always', ['sentence-case']],
	},
};

//check commit

module.exports = Configuration;
