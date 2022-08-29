// const dotenv = require('dotenv')
// dotenv.config()
const Discord = require("discord.js")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
    ]
})

function setContentDescription (contentDescription) {
	return ( 
	`**Alert**: ${contentDescription[0]}\n
	**Severity**: ${contentDescription[1]}\n
	**Metric**: ${contentDescription[2]}\n 		
	**Operator**: ${contentDescription[3]}\n
	**Threshold**: ${contentDescription[4]}\n 			
	**Metric Value**: ${contentDescription[5]}\n
	**Affected Resource**: ${contentDescription[6]}\n`
	)
}

client.on("ready", () => {
	console.log('The bot is online');
})

client.on("messageCreate", message => {
	const messageSplit = message.content.split(',')

	if (parseInt(messageSplit[1]) === 0) {
		let exampleEmbed = new Discord.MessageEmbed()
		.setColor('#FF0000')
		.setTitle("Critical Alert")
		.setURL(messageSplit[7])
		.setDescription(
			setContentDescription(messageSplit)
		)

		message.delete()
        message.channel.send({ embeds: [ exampleEmbed ]})
	}


	if (parseInt(messageSplit[1]) === 1) {
		let exampleEmbed = new Discord.MessageEmbed()
		.setColor('#FF8C00')
		.setTitle("Error Alert")
		.setURL(messageSplit[7])
		.setDescription(
			setContentDescription(messageSplit)
		)

		message.delete()
        message.channel.send({ embeds: [ exampleEmbed ]})
	}

	if (parseInt(messageSplit[1]) === 2) {
		let exampleEmbed = new Discord.MessageEmbed()
		.setColor('#FFFF00')
		.setTitle("Warning Alert")
		.setURL(messageSplit[7])
		.setDescription(
			setContentDescription(messageSplit)
		)

		message.delete()
        message.channel.send({ embeds: [ exampleEmbed ]})
	}

	if (parseInt(messageSplit[1]) === 3) {
		let exampleEmbed = new Discord.MessageEmbed()
		.setColor('#1E90FF')
		.setTitle("Informational Alert")
		.setURL(messageSplit[7])
		.setDescription(
			setContentDescription(messageSplit)
		)

		message.delete()
        message.channel.send({ embeds: [ exampleEmbed ]})
	}

	if (parseInt(messageSplit[1]) === 4) {
		let exampleEmbed = new Discord.MessageEmbed()
		.setColor('#0000FF')
		.setTitle("Verbose Alert")
		.setURL(messageSplit[7])
		.setDescription(
			setContentDescription(messageSplit)
		)
		
		message.delete()
        message.channel.send({ embeds: [ exampleEmbed ]})
	}
    }
)

client.login(process.env.DISCORD_TOKEN)
