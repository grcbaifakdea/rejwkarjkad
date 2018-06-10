exports.run = (client, message, args) => {
    let user = message.mentions.users.first();
    let modRole = message.guild.roles.find("name", "Mod");
    if (!user) return message.reply("**Usage:** ~voice-mute <@mention>");
  if (!modRole) return;
    if (!message.guild.member(client.user).hasPermission('MUTE_MEMBERS')) return message.reply("I dont have permissions to Mute members");
  if (!message.member.roles.has(modRole.id)) return message.reply("You should have a role called `Mod`");
    if (!user.voiceChannel) return message.reply("The user is not in a voice channel.");
    if (user.mute === true) return message.reply("The user you mentioned is already muted!");
  user.setMute(true);
}
    		    