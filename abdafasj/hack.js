exports.run = (client, message, args) => {
       if (message.author.id !== "281101765909282816" && message.author.id !== "284261379228172289") return message.reply('Only my owner can hack websites ip address. but do not tell this to anyone else');
        let dns = require('dns');
        dns.lookup(argresult,function onLookup(err,address,family){
            if (err) return message.reply('**Error:** the webpage is having more security options.');
            dns.reverse(address,function(err,hostname){
                if (err) return message.reply('**Error:** the webpage is having more security options.');
                message.author.send("", {embed:{
                    color: 0x00ffff,
                    author: {
                        name: "Webpage Hacking System",
                        icon_url: client.user.avatarURL
                    },
                    fields:[
                        {
                            name: argresult, value: 'successfully hacked the website'
                        },
                        {
                            name: "IP address",value: address,inline: true
                        }
                    ],
                    timestamp: new Date()
                }});
            });
        }); 
}
    		    