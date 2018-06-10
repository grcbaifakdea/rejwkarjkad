exports.run = (client, message, args) => {
		let porsche = message.mentions.users.first().username;
        let porsche2 = message.author.username;
		let Array1 = [`${porsche}'s starting was successful but ${porsche2}'s starting was not too succesful, so ${porsche} took the lead`, `${porsche2}'s starting was successful but ${porsche}'s starting was not too succesful, so ${porsche2} took the lead`, `both of them started really good and don't know who will take the lead now`];
		let Array2 = [`${porsche2}'s car crashed in first corner, that made him start again from the position he crashed, but don't forget that he may take lead`, `${porsche}'s car crashed in first corner, that made him start again from the position he crashed, but don't forget that he may take lead`, `both of them cornered really well and don't know who is going to take lead now`];
		let Array3 = [`${porsche2}'s car crashed in second corner, that made him start again from the position he crashed, but don't forget that he may take lead`, `${porsche}'s car crashed in second corner, that made him start again from the position he crashed, but don't forget that he may take lead`, `both of them cornered really well and don't know who is going to take lead now`];
		let Array4 = [`${porsche} pressed the NOS button and he crossed the finishing line first, and ${porsche2} was out of NOS. And the winner is ${porsche} :trophy:`, `${porsche2} pressed the NOS button and he crossed the finishing line first, and ${porsche} was out of NOS. And the winner is ${porsche2} :trophy:`, `both of them pressed NOS button and crossed the finishing line at the same time, so this is a draw. no one won`];
        let Element1 = Array1[Math.floor(Math.random()*Array1.length)]
		let Element2 = Array2[Math.floor(Math.random()*Array2.length)]
		let Element3 = Array3[Math.floor(Math.random()*Array3.length)]
		let Element4 = Array4[Math.floor(Math.random()*Array4.length)]
		if (message.mentions.users.size === 0) return message.reply('Mention a user first!')
         message.channel.send("", {embed: {
         	color: 0x00ffff,
         	image: {
         		url: "https://images.discordapp.net/.eJwNyVEOgyAMANC7cACKgBS9DUEEEl0J7T6WZXef7_d91XtealdNZPAOcHTONA_NQjPVoitRvUoanXWmG5JIyu0uL2GwFr1Ba9zicUMbTARnlzXi6jGG4Lb4JNQ-2kfXfqrfH7_zIeg.WvbdX44OUQbsGzm0zENfDjD2L5Q"
         	}
         }});
		message.channel.send("", {embed: {
			color: 0x00ffff,
			fields: [
				{
					name: "**_Starting point_**",value: `${Element1}`
				},
				{
					name: "**_First Corner_**",value: `${Element2}`
				},
				{
				    name: "**_Second Corner_**",value: `${Element3}`
				},
				{
					name: "**_Finishing Line_**",value: `${Element4}`					
				}
			],
	        }});
}
    		    