var config = {};

config.couchdb = {};
config.twilio = {};

config.couchdb.url = 'https://jtruxon:avatar101@jtruxon.cloudant.com/events';
config.couchdb.secondsToInvalidateEvents = 30;
config.couchdb.secondsToFlushVotes = 5;

config.twilio.sid = 'ACdcd8a49c241fc45b6c0aae0a37b44bb6';
config.twilio.key = '9e4dfc986050b1bc3bd7c295dbf48d0e';
config.twilio.disableSigCheck = false;

module.exports = config;
