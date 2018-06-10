const ccolor = require('chalk');

exports.run = (client) => {
    console.log(ccolor.bgBlack.green(`I am ready! serving in ${client.guilds.size} servers!`));
    console.log(ccolor.bgBlack.green('press ctrl + c to shut me down'));
    client.user.setActivity(`~help | ${client.guilds.size} servers!`)
    client.user.setStatus('online') 
}