exports.run = (client, message, args) => {
        var gag = require('node-9gag')
        if (args.length === 0) return message.reply('**Usage:** ~9gag <search-terms>');
        gag.find(args.join(' '), function (err, res) {
            if (err) return message.reply(`No results for **${argresult}**`);
            if (res.result === undefined) return message.reply(`No results for **${argresult}**`);
            message.channel.send("", {embed:{
                color: 0x00ffff,
                author: {
                    icon_url: "https://images-cdn.9gag.com/photo/azL60YN_460s.jpg"
                },
                fields: [
                    {
                        name: `9GAG`,value: `[${res.result[0].title}](${res.result[0].url})`
                    }
                ],
                image: {
                    url: res.result[0].image
                },
                timestamp: new Date()
            }});
        });
}
    		    