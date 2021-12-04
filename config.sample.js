module.exports = {
	
	  "dependencies": {
        "@discord-player/extractor": "^3.0.0",
        "@discordjs/opus": "^0.5.0",
        "@k3rn31p4nic/google-translate-api": "github:k3rn31p4nic/google-translate-api",
        "@sentry/node": "6.3.6",
        "@sindresorhus/slugify": "^1.1.0",
        "amethyste-api": "github:Androz2091/amethyste-api",
        "ascii-table": "0.0.9",
        "blague.xyz": "^2.0.4",
        "btoa": "^1.2.1",
        "canvacord": "^5.1.0",
        "canvas": "^2.6.1",
        "chalk": "^4.1.0",
        "colors-generator": "^0.3.4",
        "cron": "^1.7.2",
        "dblapi.js": "^2.3.0",
        "discord-backup": "^2.1.19",
        "discord-canvas": "^1.3.2",
        "discord-giveaways": "^4.4.3",
        "discord-paginationembed": "^2.1.0",
        "discord-player": "^4.1.0",
        "discord.js": "discordjs/discord.js",
        "ejs": "^3.1.3",
        "express": "^4.17.1",
        "express-session": "^1.17.0",
        "figlet": "^1.5.0",
        "fortnite": "^4.3.2",
        "gamedig": "^3.0.0",
        "i18next": "^20.2.2",
        "i18next-node-fs-backend": "^2.1.3",
        "js-string-cleaner": "^1.0.3",
        "lyrics-finder": "^21.7.0",
        "markdown-table": "2.0.0",
        "mathjs": "^9.0.0",
        "md5": "^2.2.1",
        "moment": "^2.26.0",
        "mongoose": "^5.9.25",
        "ms": "^2.1.3",
        "string-sanitizer": "^1.1.1"
	  };
		  
	/* For the support server */
	support: {
		id: "901582192910692422", // The ID of the support server
		logs: "XXXXXXXXXXX", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: true, // whether the dashboard is enabled or not
		secret: "0s3PHSLWwaG5XqIvvIoeszpxFt8z9qbB", // Your discord client secret
		baseURL: "http://maxhgaming.c1.bic/Datom/datom.html", // The base URl of the dashboard
		logs: "XXXXXXXXXXX", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "@Datom1", // Express session password (it can be what you want)
		failureURL: "http://.maxhgamingc1.biz" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	prefix: "*", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "Datom - Alle Rechten In Bezit " // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "654754089909092362", // The ID of the bot's owner
		name: "moi#4277" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "XXXXXXXXXXX",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "XXXXXXXXXXX",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "XXXXXXXXXXX",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "XXXXXXXXXXX",
		// SENTRY: https://sentry.io (this is not required and not recommended - you can delete the field)
		sentryDSN: "XXXXXXXXXXX"
	} 
};
