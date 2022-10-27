const axios = require('axios');

const { SlashCommandBuilder } = require('discord.js');

const { host, port } = require('../config');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('register')
		.setDescription('Register new tutor to the tutoring bot!'),
	async execute(interaction) {
		console.log(`/register invoked!`);
		const discordId = interaction.member.user.id;

		const options = {
			url: `${host}:${port}/register`,
			method: "POST",
			data: {
				discordId: discordId,
			},
		};

		try {
			const res = await axios(options);
			await interaction.reply("Congratulations! You have been registered to the bot!");
		} catch (err) {
			console.log(`/register - API call failed! Error=${err}`);
			await interaction.reply("Uh oh! Something went wrong.");
		}
	},
};