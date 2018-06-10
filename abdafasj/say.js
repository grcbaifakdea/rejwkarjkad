exports.run = (client, message, args) => {
		if (args.size === 0) {
			message.reply('***Usage:*** *~say <message>*')
		}
		message.channel.send(`${args.join(" ")}`).catch(console.error);
}