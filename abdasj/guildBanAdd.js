exports.run = (client, guild, user) => {
	   let botChannel = guild.channels.find("name", "cyclone");
	    if (!botChannel) return;
  		botChannel.send("", {embed: {
			color: 0x00ffff,
			fields: [
				{
					name: "**_Ban Message_**",
				    value: `${user.username} was banned!`
				}

			],
			timestamp: new Date(),
			footer: {
            icon_url: client.user.avatarURL,
            text: 'created by Cyclone'
            }
	        }}).catch(console.error);
}