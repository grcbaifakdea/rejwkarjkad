exports.run = (client, message, args) => {
      var milliseconds = parseInt((client.uptime % 1000) / 100),
        seconds = parseInt((client.uptime / 1000) % 60),
        minutes = parseInt((client.uptime / (1000 * 60)) % 60),
        hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        var pack = require('./package.json');
        message.channel.send("", {embed: {
            color: 0x00ffff,
            description: '**Cyclone Statistics**\n',
            fields: [{
                name: '❯ Uptime',value: `${hours}:${minutes}:${seconds}.${milliseconds}`,inline: true
            }, {
                name: '❯ Memory usage',value: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`,inline: true
            }, {
                name: '❯ Version',value: pack.version,inline: true
            }],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL, 
                text: 'Statistics'
            }
        }});
}
    		    