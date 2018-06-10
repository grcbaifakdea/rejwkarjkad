exports.run = (client, message, args) => {
 let user = message.mentions.users.first()
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'muted')
      let modRole = message.guild.roles.find("name", "Mod");
  if (!modRole) return;
  if (!message.member.roles.has(modRole.id)) return message.reply("You should have a role called `Mod`")
  if(message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole)
  }
  if(!message.guild.member(user).roles.has(muteRole.id)) {
    return message.channel.send("**" + user.username + "** isnt muted!")
  }
message.channel.send("**" + message.author.username + "** unmuted " + user)
}
    		    