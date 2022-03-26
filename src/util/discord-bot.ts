import Discord, { Client, ClientOptions } from 'discord.js';

class DiscordBot {
    name: string;
    client?: Client;
    private apiKey: string;

    constructor(name: string, apiKey: string) {
        this.name = name;
        this.apiKey = apiKey;
    }

    async init(config: ClientOptions) {
        try {
            this.client = new Discord.Client(config);
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

export default DiscordBot;
