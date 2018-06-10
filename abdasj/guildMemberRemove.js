exports.run = (client, member) => {
	let guild = member.guild;
	    let botChannel = guild.channels.find("name", "cyclone");
	    if (!botChannel) return;
  		botChannel.send("", {embed: {
			color: 0x00ffff,
			fields: [
				{
					name: "**_Good bye Message_**",
				    value: `${member.user.username} left ${guild.name}, Good bye! Server members : ${guild.memberCount} :arrow_heading_down: `
				}

			],
			timestamp: new Date(),
			footer: {
            icon_url: client.user.avatarURL,
            text: 'created by Cyclone'
            }
	        }}).catch(console.error);
}