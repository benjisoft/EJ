const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var lastFired

client.on("message", async message => {
    currentTime =  Math.round(now.getTime() / 1000);
    timeSince = lastFired - currentTime;
    if (timeSince > config.minTime) {
        message.react(config.reaction)
        lastFired = currentTime;
    };
});

client.login(config.token);
