import prodKeys from './prodKeys';

let keys = prodKeys;
const env = String(process.env.NODE_ENV).trim();

if (env === 'development') {
    keys = require('./devKeys').default;
}

export default keys;
