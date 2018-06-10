exports.run = (client, message, args) => {
        let myArray = ["*You flipped* ***Heads***", "*You flipped* ***Tails***"];
        let randomElement = myArray[Math.floor(Math.random()*myArray.length)]
        message.channel.send(`${randomElement}`).catch(console.error);
}
    		    