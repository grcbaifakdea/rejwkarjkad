exports.run = (client, role) => {
  let guild = role.guild;
  let botChannel = guild.channels.find("name", "cyclone");
  if (!botChannel) return;
   		botChannel.send("", {embed: {
			color: 0x00ffff,
			fields: [
				{
					name: "**_Role deleted_**",
				    value: `A new role called ${role.name} has been deleted`
				}

			],
			timestamp: new Date(),
			footer: {
            icon_url: client.user.avatarURL,
            text: 'created by Cyclone'
            }
	        }}).catch(console.error);
}