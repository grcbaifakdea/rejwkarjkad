exports.run = (client, message, args) => {
        message.author.send("", {embed: {
            color: 0x00ffff,
            fields: [
                {
                    name: "Join My home:",value: "[Click here](https://discord.gg/DHpxhJ6)"
                },
                {
                    name: "Invite me to your server:",value: "[Click here](https://discordapp.com/oauth2/authorize?permissions=536345670&scope=bot&client_id=297672512135757825)"
                }
            ],
            timestamp: new Date()
        }});
        if (message.channel.type !== 'text') return;
        message.reply(':envelope_with_arrow: *check your DMs*'); 
}
    		    