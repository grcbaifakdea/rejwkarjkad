exports.run = (client, message, args) => {
        message.channel.send("", {embed: {
            color: 0x00ffff,
            fields: [
                {
                    name: "**_Current time :_**",
                    value: `${Date()}`
                }

            ],
            }})
}