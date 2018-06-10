exports.run = (client, message, args) => {
  var gifSearch = require('gif-search');
        if (args.length === 0) return message.reply('**Usage:** ~gif <search-terms>');
        gifSearch.random(argresult).then(gifUrl => {
            if (!gifUrl) return message.reply(`**Error:** No results for ${args.join(' ')}!`);
            message.channel.send("", {embed:{
                color: 0x00ffff,
                image: {
                    url: gifUrl
                },
                timestamp: new Date()
            }});
        });
    }
    		    