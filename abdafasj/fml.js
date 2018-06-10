const superagent = require('superagent');
exports.run = (client, message, args) => {
       var HTMLParser = require('fast-html-parser');
        superagent.get('http://www.fmylife.com/random').end((err, res) => {
            if (err) return message.reply('**Error:** Cant connect with [fml](http://www.fmylife.com/). Try again later! :wink:');
            let root = HTMLParser.parse(res.text);
            let article = root.querySelector('.post.article .fmllink');
            message.reply(article.childNodes[0].text).catch(error => console.log(error.stack));
        });
}
    		    