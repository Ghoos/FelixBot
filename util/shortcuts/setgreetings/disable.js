module.exports = async(client, message, args) => {
    /**
     * Shortcut to disable the greetings
     * @param {Client} client The bot instance
     * @param {Object} message The message which triggered this shortcut
     * @param {Array} args The splitted arguments
     */
    return new Promise(async(resolve, reject) => {
        const guildEntry = client.guildData.get(message.guild.id);
        if (!guildEntry.onEvent.guildMemberAdd.greetings.enabled) return resolve(message.channel.createMessage(`:x: Greetings are already disabled`));
        guildEntry.onEvent.guildMemberAdd.greetings.enabled = false;
        client.guildData.set(message.guild.id, guildEntry);
        resolve(await message.channel.createMessage(`:white_check_mark: Alright, the greetings are now disabled`));
    });
}