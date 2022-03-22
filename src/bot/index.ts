import { Message } from 'discord.js';
import DiscordBot from '../util/create-bot';
import config from '../config/keys';
import handleCommand from './commands';

const bot = new DiscordBot('ThorusBot', config.bot.token || '');
bot.init();

const client = bot.client;

client?.on('message', async (msg: Message) => {
    const id = client.application?.id;
    try {
        if (id !== msg.author.id) console.log(msg.author);
        msg.content = msg.content.toLowerCase();
        if (msg.content.startsWith('!')) {
            await handleCommand(msg);
        }
    } catch (err: any) {
        console.log(err.message);
    }
});
