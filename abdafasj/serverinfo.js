exports.run = (client, message, args) => {
        message.channel.send("", {embed: {
            author: {
                name: message.guild.name,
                icon_url: message.guild.iconURL
            },
            color: 0x00ffff,
            fields: [
                {
                    name: `**_Informations about this server_**`,value: `**Id:**\n${message.guild.id}\n**Owner:**\n${message.guild.owner.user.username}\n**Members:**\n${message.guild.memberCount}\n**Region:**\n${message.guild.region}\n**Created At:**\n${message.guild.createdAt}`,
                }

            ],
            timestamp: new Date(),
            footer: {
            icon_url: client.user.avatarURL,
            text: 'created by Cyclone'
            }
            }});
}
    		    