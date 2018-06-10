exports.run = (client, message, args) => {
    	let guild = message.guild;
    	let modRole = guild.roles.find("name", "Mod");
    	let botChannel = guild.channels.find("name", "cyclone");
    	if (args.length === 0) {
    		return message.reply('***Usage:*** *~create* <name>*');
    	} 
    	if (!botChannel) return;
    	if (!modRole) return;
    	if (!message.member.roles.has(modRole.id)) return message.reply('You should have `Mod` role to make channels!')   
    	if (!guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply('I dont have permissions to create channels!');
	    guild.createChannel(args.join("-"), 'text');
	    botChannel.send("", {embed: {
	    	color: 0x00ffff,
	    	author: {
	    		icon_url: message.author.avatarURL,
	    		name: message.author.username
	    	},
	    	fields: [
	    	    {
	    	    	name: "Channel created",value: `A channel by the name of **${args.join("-")}** has been created for **${message.author.username}**'s command!`
	    	    }
	    	],
	    	timestamp: new Date(),
	    	footer: {
	    		text: "created by Cyclone",
	    		icon_url: client.user.avatarURL
	    	}
	    }});
}
    		    