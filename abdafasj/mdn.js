exports.run = (client, message, args) => {
        var scrapeMdn = require("scrape-mdn");
        if (args.length === 0) return message.reply("***Usage:*** *~mdn <something to look for>*")
        scrapeMdn.search(args.join(" ")).then((results) => {
            var {url, title, description} = results[0];
            if (!results) {
                return message.reply(`*No results for* ***${argresult}***!`);
            }
            message.channel.send("", {embed: {
                color: 0x00ffff,
                fields: [
                    {
                        name: `Mozilla Developer Network`,value: `[${title}](${url})\n${description}`
                    },
                ],
                timestamp: new Date()
            }});
        });
}
    		    