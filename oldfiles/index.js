const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"]})

client.on("message", msg => {
    if (msg.content == 'ping') {
        msg.reply('pong');
    }
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login('token lol');