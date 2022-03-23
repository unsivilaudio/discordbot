import { Message } from 'discord.js';
import DiscordBot from '../util/create-bot';
import config from '../config/keys';
import handleCommand from './commands';
import verifyMember from './handlers/verification';

const bot = new DiscordBot('ThorusBot', config.bot.token || '');
bot.init();

const client = bot.client;

client?.on('ready', () => {
    client.user?.setPresence({
        activities: [
            {
                name: 'Users and Messages',
                type: 'WATCHING',
            },
        ],
    });

    client.channels.cache.forEach(async x => {
        if (x.type === 'GUILD_TEXT' && x.name === 'verify') {
            const data = await x.messages.fetch();
            const [msg] = data.entries();
            msg[1].createReactionCollector();
        }
    });
});

// client?.on('messageUpdate', update => {
//     console.log(update);
// });

client?.on('messageReactionAdd', verifyMember);

client?.on('messageCreate', async (msg: Message) => {
    const id = client.application?.id;
    try {
        // console.log(client);
        // if (id !== msg.author.id) console.log(msg.author);
        msg.content = msg.content.toLowerCase();
        if (msg.content.startsWith('!')) {
            await handleCommand(msg);
        }
    } catch (err: any) {
        console.log(err.message);
    }
});
