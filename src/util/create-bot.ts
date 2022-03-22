import Discord, { Client } from 'discord.js';

class Bot {
    name: string;
    client?: Client;
    private apiKey: string;

    constructor(name: string, apiKey: string) {
        this.name = name;
        this.apiKey = apiKey;
    }

    async init() {
        try {
            this.client = new Discord.Client({
                intents: [
                    'DIRECT_MESSAGES',
                    'DIRECT_MESSAGE_REACTIONS',
                    'DIRECT_MESSAGE_TYPING',
                    'GUILDS',
                    'GUILD_MESSAGES',
                    'GUILD_MESSAGE_REACTIONS',
                    'GUILD_MESSAGE_TYPING',
                ],
            });
            this.listen(this.client);
            await this.client.login(this.apiKey);
        } catch (err: any) {
            console.log('ERROR: ', err.message);
            console.log(err);
        }
    }

    private listen(client: Client) {
        client.on('ready', () => {
            console.log(`Logged in as ${client?.user?.tag}`);
        });
    }
}

export default Bot;
