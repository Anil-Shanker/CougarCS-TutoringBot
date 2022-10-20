const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('register')
		.setDescription('Register new tutor to the tutoring bot!'),
	async execute(interaction) {
        // Create API call
		await interaction.reply(interaction.member.user.id);
	},
};