import DS from 'ember-data';

export default DS.Model.extend({
  users: DS.hasMany('user'),
  messages: DS.hasMany('message'),
  type: DS.attr(),
  title: function(){
    var title = this.get('users').mapBy('username').join(',');
    // this.get('users').forEach(function());
    return title;
  }.property('type', 'users.length')
});
