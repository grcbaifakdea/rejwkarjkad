exports.run = (client, message, args) => {
    let user = message.mentions.members.first();
    let nick = args.slice(1).join(' ');
    let modRole = message.guild.roles.find("name", "Mod");
  if (!modRole) return;
  if (!message.member.roles.has(modRole.id)) return message.reply("You should have a role called `Mod`")
    if (!user) return message.reply("Mention a user first!");
  if (user.highestRole.position > message.guild.me.highestRole.position) return message.reply('The member you mentioned is having his role higher than me').catch(console.error);
  if (user.highestRole.position === message.guild.me.highestRole.position) return message.reply('I need to have higher role than that user, to change nickname of that user!').catch(console.error);
    user.setNickname(nick);
    message.reply(`**${message.mentions.members.first().username}**'s nickname has been succesfully set as **${nick}**`);
  
}
    		    