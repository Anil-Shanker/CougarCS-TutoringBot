const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');

const { host, port } = require('../config');

const choices = [{ name: 'Text', value: 1 }, { name: 'Voice', value: 2 }, { name: 'In-Person', value: 3 }];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('log')
        .setDescription('Log a tutoring session to the bot!')
        .addIntegerOption(option =>
            option.setName('tutoring-type')
                .setDescription('The medium used to tutor the student!')
                .setRequired(true)
                .addChoices(
                    ...choices
                ))
        .addNumberOption(option =>
            option.setName('duration')
                .setDescription('The duration in minutes of the tutoring session!')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('description')
                .setDescription('A brief description of the tutoring session!')
                .setRequired(true)),

    async execute(interaction) {
        console.log(`/log invoked!`);
        const discordId = interaction.member.user.id;
        const tutoringTypeId = interaction.options.getInteger('tutoring-type');
        const duration = interaction.options.getNumber('duration');
        const description = interaction.options.getString('description');

        const options = {
            url: `${host}:${port}/log`,
            method: "POST",
            data: {
                duration: duration,
                description: description,
                tutoringTypeId: tutoringTypeId,
                tutorId: discordId
            }
        };

        try {
            const res = await axios(options);
            await interaction.reply("Congratulations! You have logged a tutoring session!");
        } catch (err) {
            console.log(`/log - API call failed! Error=${err}`);
            await interaction.reply("Uh oh! Something went wrong.");
        }
    },
};