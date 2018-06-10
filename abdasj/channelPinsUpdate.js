exports.run = (client, channel, time) => {
	let guild = channel.guild;
    let botChannel = guild.channels.find("name", "cyclone");
    if (!botChannel) return;
  		botChannel.send("", {embed: {
			color: 0x00ffff,
			fields: [
				{
					name: "**_Pins Update_**",
				    value: `The pins for ${channel.name} have been updated at ${time}`
				}

			],
			timestamp: new Date(),
			footer: {
            icon_url: client.user.avatarURL,
            text: 'created by Cyclone'
            }
	        }}).catch(console.error);
}