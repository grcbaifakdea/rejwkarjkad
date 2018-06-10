exports.run = (client, oldEmoji, newEmoji) => {
	let guild = newEmoji.guild;
	let botChannel = guild.channels.find("name", "cyclone");
	if (!botChannel) return;
  		botChannel.send("", {embed: {
			color: 0x00ffff,
			fields: [
				{
					name: "**_Emoji Update_**",
				    value: `The emoji called **${oldEmoji.name}** has been updated to **${newEmoji.name}**!`
				}

			],
			timestamp: new Date(),
			footer: {
            icon_url: client.user.avatarURL,
            text: 'created by Cyclone'
            }
	        }}).catch(console.error);
}