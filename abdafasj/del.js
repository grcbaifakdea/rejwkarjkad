exports.run = (client, message, args) => {
    let argresult = args.join(" ")
    let guild = message.guild;
    let modRole = guild.roles.find("name", "Mod");
    if (!modRole) return;
    if (!message.member.roles.has(modRole.id)) return message.reply('You should have `Mod` role to turn my log system on!')
    if (!guild.me.hasPermission('MANAGE_MESSAGES')) return message.reply('I dont have permissions to delete messages!'); 	
    let messagecount = parseInt(argresult);
    if (messagecount > 100) return message.reply("Cant be more than **100** at a time");
    if (!messagecount) return message.reply('***Usage:*** *~del <amount>*')
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`***${argresult}*** *messages deleted*`)
}