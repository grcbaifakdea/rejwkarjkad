exports.run = (client, message, args) => {
     var mention = message.mentions.users.first();
    var author = message.author;
    if (mention === undefined) {
        return message.channel.send("", {embed: {
            color: 0x00ffff,
            author: {
                name: `${author.username}'s Avatar!`
            },
            image: {
                url: author.avatarURL
            },
            timestamp: new Date()
        }});
    } else {
        return message.channel.send("", {embed: {
            color: 0x00ffff,
            author: {
                name: `${mention.username}'s Avatar!`
            },
            image: {
                url: mention.avatarURL
            },
            timestamp: new Date()
        }});
    }
}
    		    