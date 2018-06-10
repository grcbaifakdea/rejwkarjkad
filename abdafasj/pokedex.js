exports.run = (client, message, args) => {
		var pokemonGif = require('pokemon-gif');
		var Pokedex = require('pokedex-promise-v2');
        var p = new Pokedex();
        if (args.length === 0) return message.reply('**Usage:** ~pokedex <pokemon-name>');
        p.getPokemonByName(args.join(" ")).then(function(response) {
                message.channel.send("", {embed:{
            	    color: 0x00ffff,
            	    fields: [
            	        {
            	            name: `Pokemon Info`,value: `**Name:** ${response.name}\n**Weight:** ${response.weight}\n**Height:** ${response.height}\n**ID:** ${response.id}`,
            	        }
            	    ],
            	    image: {
            	    	url: pokemonGif(response.name)
            	    },
            	    timestamp: new Date()
                }});           	

        }).catch(function(error) {
          message.channel.send(`**Error:** Could not find pokemon **${args.join(" ")}**`);
        }); 
}
    		    