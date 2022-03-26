import { Message, ClientOptions } from 'discord.js';
import DiscordBot from '../util/discord-bot';
import config from '../config/keys';
import handleCommand from './commands';
import verifyMember from './handlers/verification';

const bot = new DiscordBot('SimonSays', config.bot.token || '');
const opts: ClientOptions = {
    intents: [
        'DIRECT_MESSAGES',
        'DIRECT_MESSAGE_REACTIONS',
        'DIRECT_MESSAGE_TYPING',
        'GUILDS',
        'GUILD_MEMBERS',
        'GUILD_MESSAGES',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGE_TYPING',
    ],
    partials: ['MESSAGE', 'CHANNEL'],
};
bot.init(opts);

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
            const msgs = data.values();
            const message = msgs.next().value;
            message.createReactionCollector();
        }
    });
});

// client?.on('messageUpdate', update => {
//     console.log(update);
// });

client?.on('messageReactionAdd', verifyMember);

client?.on('messageUpdate', msg => {
    console.log('Msg received.');
});

client?.on('messageCreate', async (msg: Message) => {
    const id = client.application?.id;
    const isBot = id === msg.author.id;
    if (isBot) return;
    try {
        if (msg.content.startsWith('!')) {
            await handleCommand(msg);
        }
    } catch (err: any) {
        console.log(err.message);
    }
});
