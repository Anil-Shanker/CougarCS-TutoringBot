const { EmbedBuilder } = require('discord.js');
const Utils = require('../utils');

function statsEmbed(stats) {
    const fields = stats
        .sort((a, b) => a.tutoringTypeId - b.tutoringTypeId)
        .map(stat => {
            return {
                name: Utils.tutoringTypeIdToDescription(stat.tutoringTypeId),
                value: Utils.formatDuration(stat._sum.duration),
            }
        });

    return new EmbedBuilder()
        .setTitle('Tutoring stats')
        .setAuthor({ name: 'CougarCS-TutoringBot' })
        .setDescription('Summary of your tutoring stats!')
        .addFields(
            ...fields
        )
        .setTimestamp();
}

module.exports = { statsEmbed };