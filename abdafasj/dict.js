exports.run = (client, message, args) => {
        if (args.length === 0) return message.reply('**Usage:** ~dict <word>');
        var webdict = require('webdict');
        webdict('dictionary', args.join(' ')).then(resp => {
            if (!resp) return message.reply(`No results for **${argresult}**`);
            var define = "• " + resp.definition.join("\n• ")
            message.channel.send("", {embed:{
                color: 0x00ffff,
                author: {
                    name: "Dictionary",icon_url: client.user.avatarURL
                },
                fields: [
                    {
                        name: `Showing results for ${argresult}`,value: `${define}`
                    }
                ]
            }});
        });
}
    		    