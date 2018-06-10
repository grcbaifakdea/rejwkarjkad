exports.run = (client, oldChannel, newChannel) => {
 	let guild = newChannel.guild;
    let botChannel = guild.channels.find("name", "cyclone");
    if (!botChannel) return;
  		botChannel.send("", {embed: {
			color: 0x00ffff,
			fields: [
				{
					name: "**_Channel Updated_**",
				    value: `A ${newChannel.type} channel by the name of ${oldChannel.name} was updated to ${newChannel.name}`
				}

			],
			timestamp: new Date(),
			footer: {
            icon_url: client.user.avatarURL,
            text: 'created by Cyclone'
            }
	        }}).catch(console.error);
}