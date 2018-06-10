exports.run = (client, message) => {
	let guild = message.guild;
	let botChannel = guild.channels.find("name", "cyclone");
	if (!botChannel) return;
  		botChannel.send("", {embed: {
			color: 0x00ffff,
			fields: [
				{
					name: "**_All Reactions Removed_**",
				    value: `All reactions in the message with contents ${message.cleanContent}, was removed`
				}

			],
			timestamp: new Date(),
			footer: {
            icon_url: client.user.avatarURL,
            text: 'created by Cyclone'
            }
	        }}).catch(console.error);
}