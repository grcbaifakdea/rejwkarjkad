exports.run = (client, message, args) => {
    let modRole = message.guild.roles.find("name", "Mod");
    if (!modRole) return;
    if (args.length === 0) return message.reply('**Usage:** ~unban <username>')
    if (!message.member.roles.has(modRole.id)) return message.reply("You should have a role called `Mod`")
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("I dont have the permissions to unban members!");
    message.guild.fetchBans().then(lol => {
        var user = lol.find("username", args.join(' '));
        if (!user) return message.reply(`**Error:** No user with the username *${args.join(' ')}* in the ban list. please check the spelling and Capitalisation again.`);
        message.guild.unban(user.id).then(user => message.channel.send(`Unbanned **${user.username}**`)).catch(console.error);
     });
}
    		    