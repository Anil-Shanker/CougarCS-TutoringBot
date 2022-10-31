const { EmbedBuilder } = require('discord.js');
const Util = require('../utils');

function logEmbed(data) {
    const { id, timestamp, duration, description, tutoringTypeId } = data;

    return new EmbedBuilder()
        .setTitle('Deleted tutoring session')
        .setAuthor({ name: 'CougarCS-TutoringBot' })
        .setDescription('Summary of deleted tutoring session!')
        .addFields(
            { name: 'Session ID', value: id },
            { name: 'Timestamp', value: timestamp },
            { name: 'Duration', value: Util.formatDuration(duration) },
            { name: 'Description', value: description },
        )
        .setTimestamp();
}

module.exports = { logEmbed };