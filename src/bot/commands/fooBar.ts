import { Message } from 'discord.js';

const foo = async (msg: Message) => {
    await msg.reply('bar');
};

export default foo;
