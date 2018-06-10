exports.run = (client, emoji) => {
 	let guild = emoji.guild;
	let botChannel = guild.channels.find("name", "cyclone");
	if (!botChannel) return;
  		botChannel.send("", {embed: {
			color: 0x00ffff,
			fields: [
				{
					name: "**_Emoji Created_**",
				    value: `A new emoji called **${emoji.name}** has been created! :${emoji.name}:`
				}

			],
			timestamp: new Date(),
			footer: {
            icon_url: client.user.avatarURL,
            text: 'created by Cyclone'
            }
	        }}).catch(console.error);
}