exports.run = (client, message, args) => {
    if(message.channel.type !== 'text') return;
    let reason = args.slice(1).join(' ');
    let mention = message.mentions.users.first();
    let guild = message.guild;
    let botChannel = guild.channels.find("name", "cyclone");
    let modRole = message.guild.roles.find("name", "Mod");
  if (!modRole) return;
  if (!message.member.roles.has(modRole.id)) return message.reply("You should have a role called `Mod`")
    if (!reason) return message.reply("Supply a reason!");
    if (!mention) return message.reply("Mention a user to warn!");
    if (!botChannel) return message.reply(`${mention.username} has been warned for ${reason}!`);
    mention.send(mention + `You have been warned by ${message.author.username} in ${guild.name} for ${reason}!`);
    message.reply(`${message.mentions.users.first().username} has been succesfully warned!`);
    botChannel.send("", {embed: {
      color: 0x00ffff,
      fields: [
          {
            name: "User Warned",
            value: `${message.mentions.users.first().username} has been warned by ${message.author.username} for ${reason}`
          }
      ],
      timestamp: new Date(),
      footer: {
            icon_url: client.user.avatarURL,
            text: 'created by Cyclone'
      }
    }});
}
    		    