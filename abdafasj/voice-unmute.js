exports.run = (client, message, args) => {
    let user = message.mentions.users.first();
    let modRole = message.guild.roles.find("name", "Mod");
  if (!modRole) return;
    if (!user) return message.reply("**Usage:** ~voice-mute <@mention>");
  if (!message.member.roles.has(modRole.id)) return message.reply("You should have a role called `Mod`");
    if (!message.guild.member(client.user).hasPermission('MUTE_MEMBERS')) return message.reply("I should have MUTE_MEMBERS permission to unmute members!");
    if (!user.voiceChannel) return message.reply("The user is not in a voice channel.");
  if (user.mute === false) return message.reply("The user you mentioned is not muted!");
  user.setMute(false);
}
    		    