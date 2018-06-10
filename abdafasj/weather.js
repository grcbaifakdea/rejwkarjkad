exports.run = (client, message) => {
	var weather = require('yahoo-weather');
	weather(args.join(' ')).then(info => {
      message.channel.send("", {embed: {
    	  color: 0x00ffff,
    	  fields: [
    		  {
    			    name: info.item.title,
    				value: `**Wind Direction** ${info.wind.direction}\n**Wind Speed** ${info.wind.speed}\n**Temperature** ${info.item.condition.temp}°C\n**Sky** ${info.item.condition.text}\n**Sunrise** ${info.astronomy.sunrise}\n**Sunset** ${info.astronomy.sunset}\n**Humidity** ${info.atmosphere.humidity}`
    		  },
    		  {
    		  	name: "Forecasts",
    		  	value: `**${info.item.forecast[1].date}** ${info.item.forecast[1].text}\n**${info.item.forecast[2].date}** ${info.item.forecast[2].text}\n**${info.item.forecast[3].date}** ${info.item.forecast[3].text}\n**${info.item.forecast[4].date}** ${info.item.forecast[4].text}\n**${info.item.forecast[5].date}** ${info.item.forecast[5].text}\n**${info.item.forecast[6].date}** ${info.item.forecast[6].text}\n**${info.item.forecast[7].date}** ${info.item.forecast[7].text}`
    		  }
    		],
		 timestamp: new Date()
    	 }});
    }).catch(err => {
      console.log(err);
    });
}
    		    