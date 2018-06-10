exports.run = (client, channel) => {
 	let guild = channel.guild;
    let botChannel = guild.channels.find("name", "cyclone");
    if (!botChannel) return;
  		botChannel.send("", {embed: {
			color: 0x00ffff,
			fields: [
				{
					name: "**_Channel Deleted_**",
				    value: `A ${channel.type} channel by the name of ${channel.name} was successfully deleted.`
				}

			],
			timestamp: new Date(),
			footer: {
            icon_url: client.user.avatarURL,
            text: 'created by Cyclone'
            }
	        }}).catch(console.error);
}