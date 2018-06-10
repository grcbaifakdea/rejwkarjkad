exports.run = (client, oldGuild, newGuild) => {
	let guild = newGuild;
	let botChannel = guild.channels.find("name", "cyclone");
	if (!botChannel) return;
  		botChannel.send("", {embed: {
  			author: {
  				name: "Server updated",
  				icon_url: guild.iconURL
  			},
			color: 0x00ffff,
			fields: [
				{
					name: "**_Before:_**",
				    value: `**Name:** ${oldGuild.name} \n**Region:** ${oldGuild.region} \n**Icon URL:** ${oldGuild.iconURL}`
				},
				{
					name: "**_After:_**",
					value: `**Name:** ${newGuild.name} \n**Region:** ${newGuild.region} \n**Icon URL:** ${newGuild.iconURL}`
				}

			],
			timestamp: new Date(),
			footer: {
            icon_url: client.user.avatarURL,
            text: 'created by Cyclone'
            }
	        }}).catch(console.error);
}