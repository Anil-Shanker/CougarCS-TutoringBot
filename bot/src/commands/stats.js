const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');

const { host, port } = require('../config');
const { statsEmbed } = require('../embeds/statsEmbed');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats')
        .setDescription('Get your tutoring stats!'),

    async execute(interaction) {
        console.log('/stats invoked!');
        const discordId = interaction.member.user.id;

        try {
            const res = await axios.get(`${host}:${port}/stats`, {
                params: {
                    discordId: discordId,
                },
            });

            console.log(res.data.stats);
            await interaction.reply({ embeds: [statsEmbed(res.data.stats)] });

        } catch (err) {
            console.log(`/stats - API call(s) failed! Error=${err}`);
            await interaction.reply("Uh oh! Something went wrong.");
        }
    },
}