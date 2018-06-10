exports.run = (client, message, args) => {
        message.channel.send('*Ponging...*').then(sent => {
            sent.edit("", {embed: {
            color: 0x00ffff,
            fields: [
                {
                    name: "Pong!",value: `Took \`${sent.createdTimestamp - message.createdTimestamp} ms\` :ping_pong:`
                }
            ]
        }});
        }); 
}
    		    