const fs = require('fs');
   const points = JSON.parse(fs.readFileSync('./dffdsk.json', 'utf8'));

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
    let userData = points[message.author.id];
 
        let random = Math.floor(Math.random() * 300);
        let myArray = ["yellow", "white", "red", "purple", "pink", "green", "blue", "black", "aqua", "mini", "superthumb", "victorem", "wheel", "led", "hook", "hexagon", "fast", "dollar"];
        let choice = args.join(" ").toLowerCase();
        if (!args[0]) return message.reply("Please specify the spinner to spin. type ~spinners to see the spinner store. **~spin <spinner>**");
        if (!myArray.includes(choice)) return message.reply(`**${choice}** is not a type of spinner in Spinner store, type **~spinners** and see the spinner store`);
        if (choice === "yellow") {
            message.reply(`**${message.author.username}** spinned a ${choice} spinner. ${yellow} lets see for how many seconds it'll spin`)
            setTimeout(() => message.channel.send(`${message.author}, ${yellow} your ${choice} spinner spun for \`${random}\` Seconds. ${yellow}`), 6000)
        } else
        if (choice === "white") {
            message.reply(`**${message.author.username}** spinned a ${choice} spinner. ${white} lets see for how many seconds it'll spin`)
            setTimeout(() => message.channel.send(`${message.author}, ${white} your ${choice} spinner spun for \`${random}\` Seconds. ${white}`), 6000)
        } else
        if (choice === "red") {
            message.reply(`**${message.author.username}** spinned a ${choice} spinner. ${red} lets see for how many seconds it'll spin`)
            setTimeout(() => message.channel.send(`${message.author}, ${red} your ${choice} spinner spun for \`${random}\` Seconds. ${red}`), 6000)
        } else
        if (choice === "purple") {
            message.reply(`**${message.author.username}** spinned a ${choice} spinner. ${purple} lets see for how many seconds it'll spin`)
            setTimeout(() => message.channel.send(`${message.author}, ${purple} your ${choice} spinner spun for \`${random}\` Seconds. ${purple}`), 6000)
        } else        
        if (choice === "pink") {
            message.reply(`**${message.author.username}** spinned a ${choice} spinner. ${pink} lets see for how many seconds it'll spin`)
            setTimeout(() => message.channel.send(`${message.author}, ${pink} your ${choice} spinner spun for \`${random}\` Seconds. ${pink}`), 6000)
        } else
        if (choice === "green") {
            message.reply(`**${message.author.username}** spinned a ${choice} spinner. ${green} lets see for how many seconds it'll spin`)
            setTimeout(() => message.channel.send(`${message.author}, ${green} your ${choice} spinner spun for \`${random}\` Seconds. ${green}`), 6000)
        } else
        if (choice === "blue") {
            message.reply(`**${message.author.username}** spinned a ${choice} spinner. ${blue} lets see for how many seconds it'll spin`)
            setTimeout(() => message.channel.send(`${message.author}, ${blue} your **${choice}** spinner spun for \`${random}\` Seconds. ${blue}`), 6000)
        } else
        if (choice === "black") {
            message.reply(`**${message.author.username}** spinned a ${choice} spinner. ${black} lets see for how many seconds it'll spin`)
            setTimeout(() => message.channel.send(`${message.author}, ${black} your ${choice} spinner spun for \`${random}\` Seconds. ${black}`), 6000)
        } else
        if (choice === "aqua") {
            message.reply(`**${message.author.username}** spinned a ${choice} spinner. ${aqua} lets see for how many seconds it'll spin`)
            setTimeout(() => message.channel.send(`${message.author}, ${aqua} your ${choice} spinner spun for \`${random}\` Seconds. ${aqua}`), 6000)
        } else
        if (choice === "mini") {
            if (userData.level < 1) return message.reply(`You have to be atleast **level 1** to spin ${choice}`)
            message.reply(`**${message.author.username}** spinned a ${choice} spinner. ${mini} lets see for how many seconds it'll spin`)
            setTimeout(() => message.channel.send(`${message.author}, ${mini} your ${choice} spinner spun for \`${random}\` Seconds. ${mini}`), 6000)
        } else
        if (choice === "superthumb") {
            if (userData.level < 1) return message.reply(`You have to be atleast **level 1** to spin ${choice}`)
            message.reply(`**${message.author.username}** spinned a ${choice} spinner. ${superthumb} lets see for how many seconds it'll spin`)
            setTimeout(() => message.channel.send(`${message.author}, ${superthumb} your ${choice} spinner spun for \`${random}\` Seconds. ${superthumb}`), 6000)
        } else
        if (choice === "victorem") {
            if (userData.level < 2) return message.reply(`You have to be atleast **level 2** to spin ${choice}`)
            message.reply(`**${message.author.username}** spinned a ${choice} spinner. ${victorem} lets see for how many seconds it'll spin`)
            setTimeout(() => message.channel.send(`${message.author}, ${victorem} your ${choice} spinner spun for \`${random}\` Seconds. ${victorem}`), 6000)
        } else
        if (choice === "wheel") {
            if (userData.level < 3) return message.reply(`You have to be atleast **level 3** to spin ${choice}`)
            message.reply(`**${message.author.username}** spinned a ${choice} spinner. ${wheel} lets see for how many seconds it'll spin`)
            setTimeout(() => message.channel.send(`${message.author}, ${wheel} your ${choice} spinner spun for \`${random}\` Seconds. ${wheel}`), 6000)
        } else
        if (choice === "led") {
            if (userData.level < 4) return message.reply(`You have to be atleast **level 4** to spin ${choice}`)
            message.reply(`**${message.author.username}** spinned a ${choice} spinner. ${led} lets see for how many seconds it'll spin`)
            setTimeout(() => message.channel.send(`${message.author}, ${led} your ${choice} spinner spun for \`${random}\` Seconds. ${led}`), 6000)
        } else
        if (choice === "hook") {
            if (userData.level < 4) return message.reply(`You have to be atleast **level 4** to spin ${choice}`)
            message.reply(`**${message.author.username}** spinned a ${choice} spinner. ${hook} lets see for how many seconds it'll spin`)
            setTimeout(() => message.channel.send(`${message.author}, ${hook} your ${choice} spinner spun for \`${random}\` Seconds. ${hook}`), 6000)
        } else
        if (choice === "hexagon") {
            if (userData.level < 5) return message.reply(`You have to be atleast **level 5** to spin ${choice}`)
            message.reply(`**${message.author.username}** spinned a ${choice} spinner. ${hexagon} lets see for how many seconds it'll spin`)
            setTimeout(() => message.channel.send(`${message.author}, ${hexagon} your ${choice} spinner spun for \`${random}\` Seconds. ${hexagon}`), 6000)
        } else
        if (choice === "fast") {
            if (userData.level < 6) return message.reply(`You have to be atleast **level 6** to spin ${choice}`)
            message.reply(`**${message.author.username}** spinned a ${choice} spinner. ${fast} lets see for how many seconds it'll spin`)
            setTimeout(() => message.channel.send(`${message.author}, ${fast} your ${choice} spinner spun for \`${random}\` Seconds. ${fast}`), 6000)
        } else
        if (choice === "dollar") {
            if (userData.level < 6) return message.reply(`You have to be atleast **level 6** to spin ${choice}`)
            message.reply(`**${message.author.username}** spinned a ${choice} spinner. ${dollar }lets see for how many seconds it'll spin`)
            setTimeout(() => message.channel.send(`${message.author}, ${dollar} your ${choice} spinner spun for \`${random}\` Seconds. ${dollar}`), 6000)
        }
}
    		    