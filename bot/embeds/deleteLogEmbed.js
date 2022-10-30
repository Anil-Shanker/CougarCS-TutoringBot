const { EmbedBuilder } = require('discord.js');

function deleteLogEmbed(data) {
    const { id, timestamp, duration, description, tutoringTypeId } = data;

    return new EmbedBuilder()
        .setTitle('Deleted tutoring session')
        .setAuthor({ name: 'CougarCS-TutoringBot' })
        .setDescription('Summary of deleted tutoring session!')
        .addFields(
            { name: 'Session ID', value: id },
            { name: 'Timestamp', value: timestamp },
            { name: 'Duration', value: duration.toString() },
            { name: 'Description', value: description },
        )
        .setTimestamp();
}

module.exports = { deleteLogEmbed };