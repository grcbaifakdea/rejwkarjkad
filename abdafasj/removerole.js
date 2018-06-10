exports.run = (client, message, args) => {
let guild = message.guild;
        if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("**Error:** I don't have the **| Manage Roles |** permission!");
        let modRole = guild.roles.find("name", "Mod");
        if (!modRole) return;
        if (!message.member.roles.has(modRole.id)) return message.reply('You should have `Mod` role to remove a role from a user!')
        if (message.mentions.users.size === 0) return message.reply("Please mention a user to remove the role from.\n**Example:** `~removerole @user Members`");
        let member = message.guild.member(message.mentions.users.first());
        if (!member) return message.reply("**Error:** That user does not seem valid.");
        let name = message.content.split(" ").splice(2).join(" ");
        let role = message.guild.roles.find("name", name);
        if (!role) return message.reply(`**Error:** | ${name} | isn't a role on this server!`);
        if (!member.roles.has(role.id)) return message.reply(`**Error:** ${message.mentions.users.first().username} does not have the role`);
        let botRolePosition = message.guild.member(client.user).highestRole.position;
        let rolePosition = role.position;
        if (botRolePosition <= rolePosition) return message.channel.send("**Error:** Failed to remove the role from the user because my highest role is lower than the specified role.");
        member.removeRole(role).catch(e => {
            return message.channel.send(`\`\`\`\n**Error:**\n${e}\`\`\`\nPlease report this to bot owner using ~send`);
        });
        message.channel.send(`***${message.author.username}***, *I've removed the role of* ***${name}*** from ***${message.mentions.users.first().username}***.`);      
    
}
    		    