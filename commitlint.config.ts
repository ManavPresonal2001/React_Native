/** @type {import('@commitlint/types').UserConfig} */
const Configuration = {
	rules: {
		'type-enum': [2, 'always', ['Feat', 'Fix', 'Chore']],
		'type-case': [2, 'always', 'pascal-case'],
		// 'type-colon-space': [2, 'always'],
		'subject-case': [2, 'always', ['sentence-case']],
	},

	// plugins: [
	// 	{
	// 		rules: {
	// 			'type-colon-space': ({ raw }: { raw: string }) => {
	// 				const match = /^([A-Z][a-z]+):\s/.test(raw);
	// 				return [
	// 					match,
	// 					'type must be PascalCase, immediately followed by colon, and one space after colon',
	// 				];
	// 			},
	// 		},
	// 	},
	// ],
};

module.exports = Configuration;
