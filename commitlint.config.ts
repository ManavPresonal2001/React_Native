/** @type {import('@commitlint/types').UserConfig} */
const Configuration = {
	rules: {
		// Only allow these types
		'type-enum': [2, 'always', ['Feat', 'Fix', 'Chore']],

		// Enforce PascalCase type (Feat, Fix, etc.)
		'type-case': [2, 'always', 'pascal-case'],

		// No space before colon and exactly one space after
		'type-colon-space': [2, 'always'],

		// Capitalize first letter of subject
		'subject-case': [2, 'always', ['sentence-case']],
	},

	plugins: [
		{
			rules: {
				'type-colon-space': ({ raw }: { raw: string }) => {
					const match = /^([A-Z][a-z]+):\s/.test(raw);
					return [
						match,
						'type must be PascalCase, immediately followed by colon, and one space after colon',
					];
				},
			},
		},
	],
};

module.exports = Configuration;
