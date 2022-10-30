const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');

const { host, port } = require('../config');
const { deleteLogEmbed } = require('../embeds/deleteLogEmbed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('deletelog')
        .setDescription('Delete your last tutoring session from the bot!'),

    async execute(interaction) {
        console.log(`/deletelog invoked!`);
        const discordId = interaction.member.user.id;

        try {
            const sessionId = (await axios.get(`${host}:${port}/log/lastForTutor`, {
                params: {
                    discordId: discordId,
                },
            })).data.log.id;

            const res = await axios.delete(`${host}:${port}/log`, {
                data: {
                    tutoringSessionId: sessionId,
                }
            });

            await interaction.reply({ embeds: [deleteLogEmbed(res.data.log)] })
        } catch (err) {
            console.log(`/deletelog - API call(s) failed! Error=${err}`);
            await interaction.reply("Uh oh! Something went wrong.");
        }
    },
};