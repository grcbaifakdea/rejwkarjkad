exports.run = (client, message, args) => {
		var random = Math.floor(Math.random() * 6);
		message.channel.send(`***${message.author.username}***, *you rolled ${random}*! :game_die:`).catch(console.error);
}
    		    