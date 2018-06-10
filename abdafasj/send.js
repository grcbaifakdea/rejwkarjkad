exports.run = (client, message, args) => {
        if (message.channel.type !== 'text') return;
        if (args.length === 0) {
            return message.reply("Whats the message!");
        }
        message.reply("*Message Submitted!*");
        client.guilds.find("name", "CYCLONE TESTING SERVER").channels.find("name", "support").send("", {embed: {
            color: 0x00ffff,
            fields: [
                {
                    name: `${message.author.username} from ${message.guild.name}(${message.channel.id}):`,value: argresult
                }
            ]
        }})
}
    		    