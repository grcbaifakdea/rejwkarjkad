const pastebinAPI = require('pastebin-js');
const pastebin = new pastebinAPI("0acedde648b311cfdda511acdf3ae94c");

exports.run = (client, message, args) => {
    if (args.length === 0) return message.reply('***Usage:*** *~paste <code-here>*');
    pastebin.createPaste(args.join(' ')).then(function (data) {
        message.channel.send(data);
    });
}
    		    