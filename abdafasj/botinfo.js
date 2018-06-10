exports.run = (client, message, args) => {
	message.channel.send("", {embed: {
			color: 0x00ffff,
			author: {
				name: client.user.username,
				icon_url: client.user.avatarURL
			},
			fields: [
				{
					name: `**_Informations about me_**`,value: `**Id:** ${client.user.id}\n**Created At:** ${client.user.createdAt}\n**Uptime:** ${client.uptime}\n**Discriminator:** ${client.user.discriminator}`,
				}
			],
			timestamp: new Date(),
			footer: {
            icon_url: client.user.avatarURL,
            text: 'created by Cyclone'
            }
	        }});
}
    		    