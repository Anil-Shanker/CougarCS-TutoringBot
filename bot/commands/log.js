const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');

const { host, port } = require('../config');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('log')
        .setDescription('Log a tutoring session to the bot!'),
    async execute(interaction) {
        console.log(`/log invoked!`);
        const discordId = interaction.member.user.id;

        const options = {
            url: `${host}:${port}/log`,
            method: "POST",
            data: {
                discordId: discordId,
            },
        };

        try {
            const res = await axiosInstance.instance(options);
            await interaction.reply("Congratulations! You have been registered to the bot!");
        } catch (err) {
            console.log(`/register - API call failed! Error=${err}`);
            await interaction.reply("Uh oh! Something went wrong.");
        }
    },
};