var config = require('./config.global');

config.env = 'local';
config.dbhost = 'localhost';
config.username = 'root';
config.password = 'root123';
config.db = 'catalog';
config.logging = true;
config.port = 3000;
module.exports = config;
