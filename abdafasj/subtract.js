exports.run = (client, message, args) => {
		let num1 = parseInt(args[0]);
		let num2 = parseInt(args[1]);
		if (args.size === 0) {
			message.reply('***Usage:*** *~subtract <2> <1>*')
		}	
		message.channel.send(`${num1 - num2}`).catch(console.error);
}