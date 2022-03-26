import { Message } from 'discord.js';

const speak = async (msg: Message) => {
    const say = msg.content.split(' ').splice(1);
    await msg.reply(say.join(' '));
};

export default speak;
