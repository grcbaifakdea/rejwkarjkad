exports.run = (client, message, args) => {
    var google = require('google')
    google.resultsPerPage = 1
    var nextCounter = 0
    google(args.join(" "), function (err, res){
        if (err) console.error(err)
        for (var i = 0; i < res.links.length; ++i) {
        var link = res.links[i];
            message.channel.send("", {embed: {
                color: 0x00ffff,
                    fields: [
                        {
                            name: 'Google', value: `Found results for *${args.join(" ")}*\n**${link.title}**\n ${link.href}`
                        }
                    ],
                    timestamp: new Date()
            }});
  }});
}
    		    