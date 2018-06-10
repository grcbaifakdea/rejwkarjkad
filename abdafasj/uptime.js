exports.run = (client, message, args) => {
         var mention = message.mentions.users.first();
        var milliseconds = parseInt((client.uptime % 1000) / 100),
        seconds = parseInt((client.uptime / 1000) % 60),
        minutes = parseInt((client.uptime / (1000 * 60)) % 60),
        hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        message.channel.send("", {embed:{
            color: 0x00ffff,
            author: {
                name: "Cyclone's Uptime",icon_url: client.user.avatarURL
            },
            fields: [
                {
                    name: "Hours:",value: hours,inline: true
                },
                {
                    name: "Minutes:",value: minutes,inline: true
                },
                {
                    name: "Seconds:",value: `${seconds}.${milliseconds}`,inline: true
                }
            ]
        }});
}
    		    