exports.run = (client, message, args) => {
	let num2 = parseInt(args[1]);
	let num1 = parseInt(args[0])
	if (args.size === 0) {
		message.reply('***Usage:*** *~add <1> <2>*')
	}	
	message.channel.send(`${num1 + num2}`).catch(console.error);
}