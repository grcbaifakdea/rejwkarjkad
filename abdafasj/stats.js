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
    
          message.channel.send("", {embed: {
              author: {
                  name: "You are currently:",
                  icon_url: message.author.avatarURL
              },
              color: 0x00ffff,
              fields: [
                  {
                      name: "**level**",
                      value: `${userData.level}`,
                      inline: true
                  },
                  {
                      name: "**Points**",
                      value: `${userData.points}`,
                      inline: true
                  }

              ],
              }});  
}
    		    