import { Message } from 'discord.js';
import fooBar from './fooBar';
import pingPong from './ping';

export const commandList = [
    {
        name: 'ping',
        handler: pingPong,
    },
    {
        name: 'foo',
        handler: fooBar,
    },
];

async function handleCommand(message: Message) {
    const command = message.content.slice(1);
    const commander = commandList.find(({ name }) => name === command);
    if (commander) {
        await commander.handler(message);
    }
}

export default handleCommand;
