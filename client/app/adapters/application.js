import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  namespace: config.APP.websocketNamespace,
  host: config.APP.websocketBaseUrl
});
