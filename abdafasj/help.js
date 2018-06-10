exports.run = (client, message, args) => {
    message.author.send("", {embed: {
            author: {
                icon_url: client.user.avatarURL,
                name: "Commands from Cyclone™"
            },
            color: 0x00ffff,
            fields: [
                {
                    name: "**__Others__**",
                    value: "[~emojify](http://cyclonebot.blogspot.com/p/emojify.html) Emojifies text\n[~info](http://cyclonebot.blogspot.com/p/emojify.html) Shows stats of the bot\n[~paste <code>](http://cyclonebot.blogspot.com/p/paste.html) Post a code on pastebin\n[~spinners](http://cyclonebot.blogspot.com/p/spinners.html) Explore the fidget spinner store\n[~spin <spinner>](http://cyclonebot.blogspot.com/p/spin.html) Spin a specific spinner from the store\n[~invite](http://cyclonebot.blogspot.com/p/invite.html) Join my home, or bring me to your server\n[~send <message>](http://cyclonebot.blogspot.com/p/send.html) Send messages to bot owner.\n[~stats](http://cyclonebot.blogspot.com/p/stats.html) Shows you your stats.\n[~help](http://cyclonebot.blogspot.com/p/help.html) Shows up this menu",
                },
                {
                    name: "**__Music__**",
                    value: "[~aq](http://cyclonebot.blogspot.com/p/aq.html) Adds a song to the queue.[~play <search>](http://cyclonebot.blogspot.com/p/play.html) Play a song which is queued by **~aq**\n[~skip/~s](http://cyclonebot.blogspot.com/p/skip.html) Skip some songs in the queue.\n[~queue](http://cyclonebot.blogspot.com/p/queue.html) Displays the currect queue\n[~pause/~p](http://cyclonebot.blogspot.com/p/pause.html) Pause music playback\n[~resume/~r](http://cyclonebot.blogspot.com/p/resume.html) Resume music playback\n[~volume/~v <num>](http://cyclonebot.blogspot.com/p/volume.html) Adjust the playback volume between 1 and 200\n[~leave](http://cyclonebot.blogspot.com/p/leave.html) leaves the channel\n[~join](http://cyclonebot.blogspot.com/p/join.html) Joins a voice channel\n[~playbacktime / ~t](http://cyclonebot.blogspot.com/p/playbacktime.html) Shows the playback time"                   
                },
                {
                    name: "**__Calculation__**",
                    value: "[~subtract <1> <2>](http://cyclonebot.blogspot.com/p/subtract.html) subtracts 2 numbers\n[~multiply <1> <2>](http://cyclonebot.blogspot.com/p/multiply.html) multiplies 2 numbers\n[~divide <1> <2>](http://cyclonebot.blogspot.com/p/divide.html) divides 2 numbers\n[~add <1> <2>](http://cyclonebot.blogspot.com/p/add.html) adds 2 numbers"                        
                },
                {
                    name: "**__Media__**",
                    value: "[~urban](http://cyclonebot.blogspot.com/p/urban.html) Shows words from urban dictionary\n[~comic](http://cyclonebot.blogspot.com/p/comic.html) Shows a random c&h comic\n[~dict](http://cyclonebot.blogspot.com/p/dict.html) Search dictionary.com\n[~9gag](http://cyclonebot.blogspot.com/p/9gag.html) Fetches a 9gag post\n[~google <search>](http://cyclonebot.blogspot.com/p/google.html) Searchs google\n[~gif](http://cyclonebot.blogspot.com/p/gif.html) Sends a gif\n[~mdn <search>](http://cyclonebot.blogspot.com/p/mdn.html) Searchs Mozilla developer network\n[~weather <location>](http://cyclonebot.blogspot.com/p/weather.html) Shows some weather info about the location\n[~yt <search>](http://cyclonebot.blogspot.com/p/yt.html) Searchs youtube for the content you want"
                }
            ]
        }}).then(() => message.author.send("", {embed:{
            color: 0x00ffff,
            fields: [
                {
                    name: "**__Fun__**",
                    value: "[~joke](http://cyclonebot.blogspot.com/p/joke.html) A random knock-knock joke\n[~fml](http://cyclonebot.blogspot.com/p/fml.html) Random fml Quote\n[~yoda <text>](http://cyclonebot.blogspot.com/p/yoda.html) Turn a text to yoda speech\n[~pokemon](http://cyclonebot.blogspot.com/p/pokemon.html) Catch a pokemon\n[~leet](http://cyclonebot.blogspot.com/p/leet.html) Leets a message\n[~ping](http://cyclonebot.blogspot.com/p/ping.html) Test the bot's speed\n[~say <message>](http://cyclonebot.blogspot.com/p/say.html) Says the message\n[<mention> (message)](http://cyclonebot.blogspot.com/p/cleverbot.html) Have a chat with cleverbot\n[~roll](http://cyclonebot.blogspot.com/p/roll.html) Roll a dice! and tell which number it rolled\n[~coinflip](http://cyclonebot.blogspot.com/p/coinflip.html) Flips a coin and tells you which side it flipped\n[~race <mention>](http://cyclonebot.blogspot.com/p/race.html) Race with the mentioned user"                    
                },
                {
                    name: "**__Info__**",
                    value: "[~movie](http://cyclonebot.blogspot.com/p/movie.html) Shows information about a movie\n[~pokedex](http://cyclonebot.blogspot.com/p/pokedex.html) Get information about a pokemon\n[~uptime](http://cyclonebot.blogspot.com/p/uptime.html) Shows cyclone's uptime\n[~userinfo <@mention>](http://cyclonebot.blogspot.com/p/userinfo.html) Shows some information about the mentioned user\n[~time](http://cyclonebot.blogspot.com/p/time.html) Sends the current time\n[~serverinfo](http://cyclonebot.blogspot.com/p/serverinfo.html) Sends information of your server\n[~avatar](http://cyclonebot.blogspot.com/p/avatar.html) Sends your avatar. if *~Avatar @mention* then sends the avatar of the mentioned user\n[~bans](http://cyclonebot.blogspot.com/p/bans.html) Shows the banned users in the server"                    
                },
                {
                    name: "**__Games__**",
                    value: "[~trivia](http://cyclonebot.blogspot.com/p/trivia.html) Gives a trivia question\n[~rps](http://cyclonebot.blogspot.com/p/rps.html) Play rock paper scissors"                    
                },
                {
                    name: "**__Moderation__** (part-1)",
                    value: "[~kick <mention>](http://cyclonebot.blogspot.com/p/kick.html) Kicks the mentioned user\n[~ban <mention>](http://cyclonebot.blogspot.com/p/ban.html) Bans the mentioned member\n[~mute <mention> <reason>](http://cyclonebot.blogspot.com/p/mute.html) Mutes the mentioned user\n[~unmute <mention>](http://cyclonebot.blogspot.com/p/unmute.html) unmutes the mentioned user\n[~warn <mention> <reason>](http://cyclonebot.blogspot.com/p/warn.html) Warn the mentioned user for a reason\n[~nick <mention> <nickname>](http://cyclonebot.blogspot.com/p/nick.html) Set a user's nickname\n[~giverole](http://cyclonebot.blogspot.com/p/giverole.html) Gives a role to a member\n[~removerole](http://cyclonebot.blogspot.com/p/removerole.html) Removes a role from a member"
                },
                {
                    name: "**__Moderation__** (part-2)",
                    value: "[~unban](http://cyclonebot.blogspot.com/p/unban.html) Unbans a user\n[~voice-mute](http://cyclonebot.blogspot.com/p/voice-mute.html) Mutes a user in voicechannel\n[~voice-unmute](http://cyclonebot.blogspot.com/p/voice-unmute.html) Unmutes a user in voicechannel\n[~create <name>](http://cyclonebot.blogspot.com/p/create.html) Creates a channel.\n[~set](http://cyclonebot.blogspot.com/p/set.html) Creates Cyclone's log channel\n[~del <amount>](http://cyclonebot.blogspot.com/p/del.html) Delete the amount of messages sent in the server"
                }
            ],
            timestamp: new Date(),
            footer: {
            text: 'created by Cyclone'
            }
        }})); 
        if (message.channel.type !== 'text') return;
        message.channel.send(':envelope_with_arrow: *check your DMs*')
}