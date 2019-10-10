const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("message", async message => {
    message.react(config.reaction)
});

client.login(config.token);
