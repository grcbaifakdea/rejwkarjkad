exports.run = (client, msg) => {
  let botChannel = msg.guild.channels.find("name", "cyclone");
  if (!msg.guild) return; 
  if (!botChannel) return;
  botChannel.send("", {embed: {
  			author: {
  				name: msg.author.username,
  				icon_url: msg.author.avatarURL
  			},
			color: 0x00ffff,
			fields: [
				{
					name: "**_Message Deleted_**",
				    value: `**A message by ${msg.author.username}, was deleted from ${msg.channel.name}**\nContent: ${msg.cleanContent}`
				}

			],
			timestamp: new Date(),
			footer: {
            icon_url: client.user.avatarURL,
            text: 'created by Cyclone'
            }
	        }}).catch(console.error);
}