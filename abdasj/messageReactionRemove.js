exports.run = (client, messageReaction, user) => {
    let guild = messageReaction.message.guild;
    let message = messageReaction.message.cleanContent;
    let botChannel = guild.channels.find("name", "cyclone");
    if (!botChannel) return;
    botChannel.send("", {embed: {
        color: 0x00ffff,
        fields: [
            {
                name: "**_Reaction Removed_**",
                value: `${user.username} removed his reaction on a message with contents: \n${message}\n, with a ${messageReaction.emoji.name}`
            }

        ],
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL,
            text: 'created by Cyclone'
        }
    }}).catch(console.error);
}