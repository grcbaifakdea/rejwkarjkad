exports.run = (client, message, args) => {
		let author = message.author;
		let member = message.mentions.users.first();
		if (member === client.user) return message.reply('If you want to view information about me, type **~botinfo**!')
		if (message.mentions.users.size === 0) return message.channel.send("", {embed: {
			color: 0x00ffff,
			author: {
				name: author.username,
				icon_url: author.avatarURL
			},
			fields: [
				{
					name: `**_Informations about You_**`,value: `**Id:** ${author.id}\n**Created At:** ${author.createdAt}\n**Discriminator:** ${author.discriminator}\n**Bot:** ${author.bot}\n**Status:** ${author.presence.status}\n**Nickname:** ${author.nickname} \n**Joined At:** ${author.JoinedAt}`,
				}
			],
			timestamp: new Date(),
			footer: {
            icon_url: client.user.avatarURL,
            text: 'created by Cyclone'
            }
	        }});
		message.channel.send("", {embed: {
			color: 0x00ffff,
			author: {
				name: member.username,
				icon_url: member.avatarURL
			},
			fields: [
				{
					name: `**_Informations about ${member.username}_**`,value: `**Id:** ${member.id}\n**Created At:** ${member.createdAt}\n**Discriminator:** ${member.discriminator}\n**Bot:** ${member.bot}\n**Status:** ${member.presence.status}\n**Nickname:** ${member.nickname} \n**Joined At:** ${member.JoinedAt}`,
				}
			],
			timestamp: new Date(),
			footer: {
            icon_url: client.user.avatarURL,
            text: 'created by Cyclone'
            }
	        }});
}
    		    