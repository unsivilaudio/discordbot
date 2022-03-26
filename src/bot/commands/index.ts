import { Message } from 'discord.js';
import fooBar from './fooBar';
import pingPong from './ping';
import speak from './speak';

export const commandList = [
    {
        name: 'ping',
        handler: pingPong,
    },
    {
        name: 'foo',
        handler: fooBar,
    },
    {
        name: 'say',
        handler: speak,
    },
];

async function handleCommand(message: Message) {
    const args = message.content.split(' ');
    const command = args[0].slice(1).toLowerCase();
    const commander = commandList.find(({ name }) => name === command);
    if (commander) {
        await commander.handler(message);
    }
}

export default handleCommand;
