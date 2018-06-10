exports.run = (client, message, args) => {
        let guild = message.guild;
        let modRole = guild.roles.find("name", "Mod");
        if (!modRole) return;
        if (!message.member.roles.has(modRole.id)) return message.reply('You should have `Mod` role to turn my log system on!')
        if (!guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply('I dont have permissions to create a channel!');
        guild.createChannel('cyclone', 'text');
        message.channel.send('Settings done!')
}
    		    