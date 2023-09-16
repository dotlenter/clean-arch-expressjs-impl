const pino = require('pino');
const logger = pino({
    name: __filename,
    level: process.env.LOG_LEVEL || 'debug',
    timestamp: pino.stdTimeFunctions.isoTime,
});
module.exports = logger;