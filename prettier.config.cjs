module.exports = {
	semi: false,
	useTabs: true,
	singleQuotes: false,

	overrides: [
		{
			files: "package.json",
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
}
