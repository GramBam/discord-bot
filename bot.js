const discord = require('discord.io');
const logger = require('winston');
const auth = require('./auth.json');

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
  colorize: true
});
logger.level = 'debug';

const bot = new discord.Client({
  token: auth.token,
  autorun: true
});

bot.on('ready', (evt) => {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', (user, userID, channelID, message, evt) => {
  if (message.substring(0, 1) == '!') {
    let args = message.substring(1).split(' ');
    let cmd = args[0];

    args = args.splice(1);
    switch(cmd) {
      case 'test':
        bot.sendMessage({
          to: channelID,
          message: 'Test Passed!'
        });
        break;
    }
  }
});