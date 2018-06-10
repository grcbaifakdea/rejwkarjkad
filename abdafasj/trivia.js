const request = require('request');

exports.run = (client, message, args) => {
        request("http://jservice.io/api/random", (err, res, body) => {
            if (err) return console.log(err)
            let quiz = JSON.parse(body)
            message.channel.send("", {embed: {
                title: "Random Trivia",
                color: 0x00ffff,
                description: "You have 30 seconds to anwser the question.",
                author: {
                    name: message.guild.name,icon_url: message.guild.iconURL
                },
                fields: [
                    {
                        name: "Category:",value: quiz[0].category.title
                    },
                    {
                        name: "Question:",value: quiz[0].question
                    }
                ]
            }})
            message.channel.awaitMessages(rm => rm.author.bot === false, {
                max: 10,
                time: 30000,
                errors: ['time'],
            }).then((collected) => {
                if (collected.includes(quiz[0].answer.toLowerCase())) {
                    return message.reply(`Congrats ${collected.author.username}! You gave the right answer: ${quiz[0].answer}`)
                }
            }).catch(collected => {
                if (!collected) message.reply(`No answers are submitted in the previous 30 seconds. correct answer: ${quiz[0].answer}`)
                message.reply(`After 30 seconds, ${collected.size} answers are Submitted and no correct answers.correct answer: ${quiz[0].answer}`);
            });
        }); 
}
    		    