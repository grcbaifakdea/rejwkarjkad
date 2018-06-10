exports.run = (client, message, args) => {
        let randomPokemon = require('pokemon-random-name');
        let pokemon = randomPokemon();
        if (pokemon.toLowerCase().startsWith("nidoran")) return message.channel.send(`**${message.author.username}**, you caught nothing.`);
        message.channel.send(`**${message.author.username}**, you have caught a **${pokemon}**!`).catch(console.error);
}
    		    