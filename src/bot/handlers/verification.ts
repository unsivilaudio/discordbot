import {
    MessageReaction,
    PartialMessageReaction,
    PartialUser,
    User,
} from 'discord.js';

type ReactionProps = MessageReaction | PartialMessageReaction;
type UserProps = User | PartialUser;

const verifyMember = (reaction: ReactionProps, user: UserProps) => {
    const { emoji, message } = reaction;
    const levelOne = message.guild?.roles.cache.find(x => x.rawPosition === 1);
    if (message && levelOne && emoji.name === '✅') {
        levelOne.members.has(user.id)
            ? null
            : message.guild?.members.cache
                  .get(user.id)
                  ?.roles.add(levelOne)
                  .catch(err => console.log(err.message));
    } else {
        console.log(`User: ${user.username} clicked wrong emoji!`);
    }
};

export default verifyMember;
