const {Signale} = require('signale');
const fs = require('fs');

 
const options = {
  disabled: false,
  interactive: false,
  logLevel: 'info',
  scope: 'custom',
  secrets: [],
  stream: process.stdout,
  types: {
    remind: {
      badge: '**',
      color: 'yellow',
      label: 'reminder',
      logLevel: 'info'
    },
    santa: {
      badge: '🎅',
      color: 'red',
      label: 'santa',
      logLevel: 'info'
    }
  }
};
 
const custom = new Signale(options);
// custom.remind('Improve documentation.');
// custom.santa('Hoho! You have an unused variable on L30.');

const loggerFile = new Signale({ stream: [process.stdout, fs.createWriteStream('./log.txt')] })


module.exports = {custom, loggerFile};