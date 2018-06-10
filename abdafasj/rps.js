exports.run = (client, message, args) => {
    let rps = ["**:moyai: rock**", "**:pencil: paper**", "**:scissors: scissors**"];
    let random = rps[Math.floor(Math.random()*3)]
    let choice = args.join(" ").toLowerCase();
        if (args.size === 0) return message.reply("Please specify either rock, paper or scissors.");
        if (choice !== "rock" && choice !== "paper" && choice !== "scissors") return message.reply(`Please specify either rock, paper or scissors. ${choice} isn't one of those!`);
        message.reply(random);  
}
    		    