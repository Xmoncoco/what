const Commando = require('discord.js-commando');
const path = require('path');
const config = require(path.join(__dirname, "config", "config.json"))


const client = new Commando.Client({
    owner: '599969683625738241',
    commandPrefix: "$"
});


client.login(config.token);


client.registry.registerGroups([
    ["mod", "mod commands"],
    ["misc","the name is explisit"]
]).registerDefaults()
.registerCommandsIn(path.join(__dirname, "commands"))


client.on('ready', () => {
    console.log("the bot is on")
});