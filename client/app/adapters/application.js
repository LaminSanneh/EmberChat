import DS from 'ember-data';
import config from '../config/environment';
import SailsSocketAdapter from 'ember-data-sails/adapters/sails-socket';

export default SailsSocketAdapter.extend({
  namespace: config.APP.websocketNamespace,
  host: config.APP.websocketBaseUrl
});
