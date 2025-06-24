module.exports = {
	apps: [
		{
			name: "jira-clone",
			script: "npx",
			args: "next start -p 3001",
			env: {
				NODE_ENV: "production",
			},
		},
	],
};
