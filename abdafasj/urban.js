exports.run = (client, message, args) => {
        if (args.length === 0) return message.chanel.send('**Urban:** ~urban <word>')
    	var urban = require('urban');
    	var tword = args.join(" ") == "" ? urban.random() : urban(args.join(" "));
    	tword.first(function(json) {
    		if (json) {
    			var msg = `**Word:** ${json.word}\n**Definition:** ${json.definition}`;
    			if (json.example) {
    				msg = `**Word:** ${json.word}\n**Definition:** ${json.definition}\n**Example:** ${json.example}`;
    			}
    			message.channel.send("", {embed: {
    				color: 0x00ffff,
    				fields: [
    				    {
    				    	name: 'Urban Dictionary',
    				    	value: `${msg}`
    				    }
    				],
			        timestamp: new Date()  
    			}});
    		} else {
    			message.channel.send("", {embed: {
    				color: 0x00ffff,
    				fields: [
    				    {
    				    	name: 'Urban Dictionary',value: `No results for **${args.join(" ")}**`
    				    }
    				],
			        timestamp: new Date()
    			}});
    		}
    	});
}
    		    