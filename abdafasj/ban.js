exports.run = (client, message, [mention, ...reason]) => {
    let banMember = message.mentions.members.first();
    let modRole = message.guild.roles.find("name", "Mod");
    if (!modRole) return;
    if (!message.member.roles.has(modRole.id)) return message.reply("You should have a role called `Mod`")
      if(message.mentions.users.size === 0) return message.reply("Mention a user first!");
    if (banMember.highestRole.position > message.guild.me.highestRole.position) return message.reply('The member you mentioned is having his role higher than me').catch(console.error);
    if (banMember.highestRole.position === message.guild.me.highestRole.position) return message.reply('I need to have higher role than that user, to kick that user!').catch(console.error);
      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("I dont have the permissions to ban members!");
    banMember.ban();
    message.reply("SUCCESS")
}
    		    