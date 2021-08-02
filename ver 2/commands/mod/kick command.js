
const Commando = require('discord.js-commando');


export default class kickCommand extends Command{
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
    async run (commandoMsg, userId) {
        let guild = commandoMsg.guild;
        let member = guild.member.get(userId);
        member.kick("ok")

    }
} 