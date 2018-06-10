exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let botChannel = message.guild.channels.find("name", "cyclone");
    let modRole = message.guild.roles.find("name", "Mod");
	if (!modRole) return;
	if (!message.member.roles.has(modRole.id)) return message.reply("You should have a role called `Mod`")
    if (!botChannel) return;
    let muteRole = message.guild.roles.find('name', 'muted');
    if (!muteRole) return message.reply('\`\`\`\n Step one = create a role called "muted"\n Step two = go to channel settings/permissions\n Step three = restrict "muted" role to send messages.\n Step four = run this command.\n\nWarning: the user wont be muted if you didnt adjust the permissions\`\`\`').catch(console.error);
    if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catcsh(console.error);
    if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the permissions to manage roles').catch(console.error);
     message.guild.member(user).addRole(muteRole).then(() => {
      botChannel.send("", {embed:{
      	color: 0x00ffff,
      	fields: [
      	    {
      	    	name: "User Muted",
      	    	value: `${message.author.username} Muted ${user.username} for ${reason}`
      	    }
      	],
      	footer: {
      		text: "created by cyclone",
      		icon_url: client.user.avatarURL
      	},
      	timestamp: new Date()
      }});
    });
}
    		    