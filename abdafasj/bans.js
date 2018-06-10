exports.run = (client, message, args) => {
        message.guild.fetchBans().then(x=>{x.map(x=> 
            message.channel.send("", {embed: {
            color: 0x00ffff,
            fields: [
                {
                    name: `**_Bans in this server:_**`,value: x.username
                }
            ]
            }}))});
}
    		    