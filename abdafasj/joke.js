exports.run = (client, message, args) => {
        var knockknock = require('knock-knock-jokes')
        message.reply(`:black_joker: ${knockknock()}`);
}
    		    