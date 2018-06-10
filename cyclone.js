const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();
const client = new Discord.Client();
const request = require('request')
const settings = require('./sfjnksd.json');
const ccolor = require('chalk');
const chalk = require('chalk');
const express = require('express');
const app = express();
const superagent = require('superagent');
const port = process.env.PORT || 5930;

app.get("/", function (req, res) {
    res.send("Welcome to the port of cyclone discord bot, hosted by Ali Maazin Hassan. 5930")
});

app.listen(port);

fs.readdir("./abdasj/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./abdasj/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

let points = JSON.parse(fs.readFileSync('./dffdsk.json', 'utf8'));
const prefix = '~';

client.on('message', message => {
	var args = message.content.split(" ").slice(1);
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (!points[message.author.id]) points[message.author.id] = {
      points: 0,
      level: 0
    };
    let userData = points[message.author.id];
    userData.points++;

    let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
    if (curLevel > userData.level) {
        userData.level = curLevel;
        message.reply(`*You've leveled up to* ***level ${curLevel}***!`);
    }

  fs.writeFile('./dffdsk.json', JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
});

client.on('message', message => {
	if(message.author.bot) return;
	if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

	var argresult = args.join(' ');
  try {
    let commandFile = require(`./abdafasj/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.login(settings.token);
