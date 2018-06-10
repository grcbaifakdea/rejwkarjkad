exports.run = (client, message, args) => {
    var yellow = client.emojis.get("335713485944258571").toString();
	var white = client.emojis.get("335713448488992768").toString();
	var red = client.emojis.get("335713416603893760").toString();
	var purple = client.emojis.get("335713388049203210").toString();
	var pink = client.emojis.get("335713355987812353").toString();
	var green = client.emojis.get("335713317622513665").toString();
	var blue = client.emojis.get("335713293773701120").toString();
	var black = client.emojis.get("335713262001979393").toString();
	var aqua = client.emojis.get("335713231593013248").toString();
	var wheel = client.emojis.get("335714069300510731").toString();
	var victorem = client.emojis.get("335714012585000962").toString();
	var superthumb = client.emojis.get("335713963062853633").toString();
	var mini = client.emojis.get("335713917487546369").toString();
	var led = client.emojis.get("335713870964457472").toString();
	var hook = client.emojis.get("335713816534974474").toString();
	var hexagon = client.emojis.get("335713766794592256").toString();
	var fast = client.emojis.get("335713710347911178").toString();
	var dollar = client.emojis.get("335713655070916618").toString();
	    	if (!message.guild.member(client.user).hasPermission("USE_EXTERNAL_EMOJIS")) return message.reply("I need Use external emojis permission to proceed with this command!");
    	message.channel.send("", {embed: {
    		color: 0x00ffff,
    		author: {
    			name: "Fidget Spinner Store"
    		},
    		fields: [
    		    {
    		    	name: "**__Free Spinners__**",
    		    	value: `| **Yellow:** Yellow spinner\n| ${yellow}\n| **White:** White spinner\n| ${white}\n| **Red:** Red spinner\n| ${red}\n| **Purple:** Purple spinner\n| ${purple}\n| **Pink:** Pink spinner\n| ${pink}\n| **Green:** Green spinner\n| ${green}\n| **Blue:** Blue spinner\n| ${blue}\n| **Black:** Black spinner\n| ${black}\n| **Aqua:** Aqua spinner\n| ${aqua}`,
    		    	inline: true
    		    },
    		    {
    		    	name: "**__Premium Spinners__**",
    		    	value: `| **Mini:** level 1\n| ${mini}\n| **Superthumb:** level 1\n| ${superthumb}\n| **Victorem:** level 2\n| ${victorem}\n| **Wheel:** level 3\n| ${wheel}\n| **Led:** level 4\n| ${led}\n| **Hook:** level 4\n| ${hook}\n| **Hexagon:** level 5\n| ${hexagon}\n| **Fast:** level 6\n| ${fast}\n| **Dollar:** level 6\n| ${dollar}`,
    		    	inline: true
    		    },
    		],
    		footer: {
    		    text: "The level refers the stats collected by Cyclone"
    		}
    	}});
}