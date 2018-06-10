exports.run = (client, messageReaction, user) => {
    let guild = messageReaction.message.guild;
    let message = messageReaction.message.cleanContent;
    let botChannel = guild.channels.find("name", "cyclone");
    if (user === client.user) return;
    if (!botChannel) return;
    botChannel.send("", {embed: {
        color: 0x00ffff,
        fields: [
            {
                name: "**_Reaction Added_**",
                value: `${user.username} reacted to a message with contents ${message}, with a ${messageReaction.emoji.name}`
            }

        ],
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL,
            text: 'created by Cyclone'
        }
    }}).catch(console.error);
}