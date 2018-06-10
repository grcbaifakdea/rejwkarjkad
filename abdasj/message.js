const yt = require('ytdl-core');
let queue = {};
const prefix = "~";

const MusicCommands = {
    'play': (msg) => {
        if (queue[msg.guild.id] === undefined) return msg.channel.send("", {embed:{
        color: 0x00ffff,
        fields: [
            {
                name: "Music Player",
                value: `Add some songs to the queue with **~aq**`
            }
        ]
      }});
        if (!msg.guild.voiceConnection) return MusicCommands.join(msg).then(() => MusicCommands.play(msg));
        if (queue[msg.guild.id].playing) return msg.channel.send("", {embed:{
        color: 0x00ffff,
        fields: [
            {
                name: "Music Player",
                value: `I am already playing`
            }
        ]
      }});
        let dispatcher;
        queue[msg.guild.id].playing = true;
        (function play(song) {
            console.log(song);
            if (song === undefined) return msg.channel.send("", {embed:{
        color: 0x00ffff,
        fields: [
            {
                name: "Music Player",
                value: `The queue is empty`
            }
        ]
      }}).then(() => {
                queue[msg.guild.id].playing = false;
                msg.member.voiceChannel.leave();
            });
            msg.channel.send("", {embed:{
        color: 0x00ffff,
        fields: [
            {
                name: "Music Player",
                value: `Playing **${song.title}** As requested by **${song.requester}**`
            }
        ]
      }});
            dispatcher = msg.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : 1 });
            let collector = msg.channel.createCollector(m => m);
            collector.on('message', m => {
                if (m.content.startsWith(prefix + 'pause') || m.content === '~p') {
                    msg.channel.send("", {embed:{
        color: 0x00ffff,
        fields: [
            {
                name: "Music Player",
                value: `Playback Paused`
            }
        ]
      }}).then(() => {dispatcher.pause();});
                } else if (m.content.startsWith(prefix + 'resume') || m.content.startsWith(prefix + 'r')){
                    msg.channel.send("", {embed:{
        color: 0x00ffff,
        fields: [
            {
                name: "Music Player",
                value: `Playback resumed`
            }
        ]
      }}).then(() => {dispatcher.resume();});
                } else if (m.content.startsWith(prefix + 'skip') || m.content.startsWith(prefix + 's')){
                    msg.channel.send("", {embed:{
        color: 0x00ffff,
        fields: [
            {
                name: "Music Player",
                value: `Skipped`
            }
        ]
      }}).then(() => {dispatcher.end();});
                } else if (m.content.startsWith(prefix +'volume') || m.content.startsWith(prefix + 'v')){
                    var args = m.content.split(" ").slice(1);
                    var newvolume = parseInt(args[0]);
                            if (!args.length === 0) return msg.channel.send("", {embed:{
        color: 0x00ffff,
        fields: [
            {
                name: "Music Player",
                value: `You must provide a volume for me to set. Eg: ~v 90`
            }
        ]
      }});
                   
                    const voiceConnection = msg.guild.voiceConnection;
                    if (voiceConnection === null) return msg.channel.send("", {embed:{
        color: 0x00ffff,
        fields: [
            {
                name: "Music Player",
                value: `No music being played`
            }
        ]
      }});
                    const dispatcher = voiceConnection.player.dispatcher;

                    if (newvolume > 200 || newvolume < 0) return msg.channel.send("", {embed:{
        color: 0x00ffff,
        fields: [
            {
                name: "Music Player",
                value: `Volume out of range`
            }
        ]
      }}).then((response) => {
                           response.delete(5000);
                });

        msg.channel.send("", {embed:{
        color: 0x00ffff,
        fields: [
            {
                name: "Music Player",
                value: `Volume set to ${newvolume}`
            }
        ]
      }});
        dispatcher.setVolume((newvolume / 200));
                } else if(m.content.startsWith(prefix + 'playbacktime') || m.content.startsWith(prefix + 't')) {
                    m.channel.send(                    "", {embed:{
        color: 0x00ffff,
        fields: [
            {
                name: "Music Player",
                value: `time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`
            }
        ]
      }})
                }
            });
            dispatcher.on('end', () => {
                collector.stop();
                play(queue[msg.guild.id].songs.shift());
            });
            dispatcher.on('error', (err) => {
                return console.log(err).then(() => {
                    collector.stop();
                    play(queue[msg.guild.id].songs.shift());
                });
            });
        })(queue[msg.guild.id].songs.shift());
    },
    'aq': (msg) => {
        let args = msg.content.split(" ").slice(1);
        if (!args.length === 0) return msg.channel.send("", {embed:{
        color: 0x00ffff,
        fields: [
            {
                name: "Music Player",
                value: `You must provide a keyword to search. Eg: ~add <song-name>`
            }
        ]
      }});
        var YouTube = require('youtube-node');
        var youtube = new YouTube();
        youtube.setKey("AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU");
        youtube.search(args.join(" "), 2, function(error, result) {
            let url = "http://www.youtube.com/watch?v=" + result.items[0].id.videoId;
            if (error) {
                return;
            }
            else {
                yt.getInfo(url, (err, info) => {
                    if(err) return msg.channel.send("", {embed:{
        color: 0x00ffff,
        fields: [
            {
                name: "Music Player",
                value: `Failed to get video info`
            }
        ]
      }});
                    if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
                    queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
                    msg.channel.send("", {embed:{
        color: 0x00ffff,
        fields: [
            {
                name: "Music Player",
                value: `Added **${info.title}** to the queue. use **~play** to start playing`
            }
        ]
      }});
                });
            }
        });
    },
    'join': (msg) => {
        return new Promise((resolve, reject) => {
            const voiceChannel = msg.member.voiceChannel;
            if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply("", {embed:{
        color: 0x00ffff,
        fields: [
            {
                name: "Music Player",
                value: `I couldnt join your voice channel`
            }
        ]
      }});
            voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
        });
    },
    'queue': (msg) => {
        if (queue[msg.guild.id] === undefined) return msg.channel.send("", {embed:{
        color: 0x00ffff,
        fields: [
            {
                name: "Music Player",
                value: `First add some songs to the queue using **~aq <song-name>**`
            }
        ]
      }});
        let tosend = [];
        queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});        msg.channel.send("", {embed:{
        color: 0x00ffff,
        fields: [
            {
                name: `__${msg.guild.name}'s Music Queue__: Currently **${tosend.length}** songs queued `,
                value: `${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n${tosend.slice(0,15).join('\n\n\n')}`
            }
        ]
      }})
    }
}

exports.run = (client, msg) => {
    if (!msg.content.startsWith(prefix)) return;
    if (MusicCommands.hasOwnProperty(msg.content.toLowerCase().slice(prefix.length).split(' ')[0])) MusicCommands[msg.content.toLowerCase().slice(prefix.length).split(' ')[0]](msg);
}