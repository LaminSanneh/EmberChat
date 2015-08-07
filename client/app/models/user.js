import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  isConnected: DS.attr(),
  chatSessions: DS.hasMany('chatSession', {
    inverse: 'users'
  }),
  startedSessions: DS.hasMany('chatSession', {
    inverse: 'startedBy'
  }),
  avatar: DS.attr()
});
