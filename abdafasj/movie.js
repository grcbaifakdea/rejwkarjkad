exports.run = (client, message, args) => {
	const argresult = args.join(' ');
        if (args.length === 0) return message.reply("**Usage:** ~movie <movie-name>")
        var movieInfo = require('movie-info');
        movieInfo(args.join(' '), function (err, res) {
            if (err) return message.reply(`**Error:** No results for *${argresult}*`)
            message.channel.send("", {embed:{
                color: 0x00ffff,
                author: {
                    name: "Movie Info",icon_url: client.user.avatarURL
                },
                image: {
                    url: `https://image.tmdb.org/t/p/original${res.backdrop_path}`
                },
                fields: [
                    {
                        name: res.title,value: res.overview
                    }
                ],
                timestamp: new Date()
            }});
        });
}
    		    