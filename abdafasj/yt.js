exports.run = (client, message, args) => {
		var YouTube = require('youtube-node');
		var youtube = new YouTube();
		if (args.length === 0) return message.reply('What to search in youtube!');
		youtube.setKey("AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU");
		youtube.search(args.join(" "), 2, function(error, result) {
			if (error) {
				console.log(error);
			}
			else {
				message.channel.send("http://www.youtube.com/watch?v=" + result.items[0].id.videoId);
			}
		});
}
    		    