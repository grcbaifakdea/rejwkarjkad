const request = require('request');

exports.run = (client, message, args) => {
        var r = request.get('http://explosm.net/comics/random', function (err, res, body) {
            message.channel.send(r.uri.href)
        });
}
    		    