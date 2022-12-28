const { Client, ClientApplication } = require(`discord.js`);
async function register(client, commands, guildID) {
	if (guildID == null) {
		return client.application.commands.set(commands);
	}
	const guild = await client.guilds.fetch(guildID);
	return guild.commands.set(commands);
}
const maintenance = {
	name: "maintenance",
	description: "メンテナンスモードを切り替えます",
};
const commands = [
    maintenance,
];
const client = new Client({
	intents: 0,
});
require(`dotenv`).config();
client.token = "OTg4NDA2NTM0MTA5MjgyMzA0.Gn_Cvo.PifnOgM8er94M-0SdeVRnkAL_KNjGM6IGHTYbM";
async function main() {
	client.application = new ClientApplication(client, {});
	await client.application.fetch();
	await register(client, commands, process.argv[2]);
	console.log(`registration succeed!`);
}
main().catch((err) => console.error(err));
