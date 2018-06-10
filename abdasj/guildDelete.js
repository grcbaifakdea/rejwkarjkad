const chalk = require('chalk');

exports.run = (client, guild) => {
	console.log(chalk.bgRed.black(`Guild removed! name : ${guild.name}, owner : ${guild.owner.user.username}.`));
    client.user.setGame(`~help | ${client.guilds.size} servers!`)
}