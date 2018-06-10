exports.run = (client, message, args) => {
       if(message.author.id !== "281101765909282816") return message.channel.send(`only my creator can use this command`);
       try {
         var code = args.join(" ");
         var evaled = eval(code);

         if (typeof evaled !== "string")
           evaled = require("util").inspect(evaled);

         message.channel.send("", {embed: {
            color: 0x00ffff,
            fields: [
                {
                    name: ":inbox_tray: Input:",value: `\`\`\`js\n${code}\n\`\`\``
                },
                {
                    name: ":outbox_tray: Output:",value: `\`\`\`js\n${"xl", clean(evaled)}\n\`\`\``
                }

            ],
            }});
 
       } catch (err) {
         message.channel.send("", {embed: {
            color: 0x00ffff,
            fields: [
                {
                    name: ":inbox_tray: Input:",value: `\`\`\`js\n${code}\n\`\`\``
                },
                {
                    name: ":outbox_tray: Output:",value: `\`\`\`js\n${clean(err)}\n\`\`\``
                }

            ],
            }});
       }

}

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
} 
    		    