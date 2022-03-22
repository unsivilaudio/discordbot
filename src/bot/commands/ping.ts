import { Message } from 'discord.js';

const pingPong = async (msg: Message) => {
    await msg.reply('Pong!');
};

export default pingPong;
