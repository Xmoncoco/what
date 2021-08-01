
const commando = require('discord.js-commando');


module.exports = class kickCommand extends commando.Command{
    constructor(client){
        super(client, {
            name: "kick",
            group: "mod",
            memberName: "kick",
            description: "kick the person",
            userPermissions: [
                'KICK_MEMBERS',
            ],
            clientPermissions: [
                'KICK_MEMBERS'
            ],
            argsType: "single"

        })
    }
    async run (commandoMsg, userid) {
        let guild = commandoMsg.guild;
        console.log(guild.member.get(userid));

    }
} 