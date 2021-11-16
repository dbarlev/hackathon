const identifiersManger = require('./manager');
const registerIdentifier = require('./identifiers/register');
const registerValidators = require('./validators/register');
const Observer = require('./observer/observer');

class Startup {
  init() {
    this.register();
  }

  register() {
    registerValidators(identifiersManger);
    registerIdentifier(new identifiersManger());
    Observer((el) => registerIdentifier(new identifiersManger(), el));
  }
}

new Startup().init();
