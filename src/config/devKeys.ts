import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

const keys = {
    bot: {
        token: process.env.BOT_TOKEN,
    },
    server: {
        port: 8000,
    },
};

export default keys;
