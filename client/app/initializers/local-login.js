export function initialize(container, application) {
  // application.inject('route', 'foo', 'service:foo');
  application.inject('torii-adapter', 'store', 'store:main');
}

export default {
  name: 'local-login',
  initialize: initialize
};
