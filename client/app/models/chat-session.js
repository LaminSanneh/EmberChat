import DS from 'ember-data';

export default DS.Model.extend({
  users: DS.hasMany('user'),
  messages: DS.hasMany('message'),
  type: DS.attr(),
  startedBy: DS.belongsTo('user'),
  title: function(){
    var title = this.get('otherUsers').mapBy('username').join(',');
    return title;
  }.property('type', 'users.length'),
  otherUsers: function () {
    var model = this;
    return this.get('users').filter(function(user){
      return user.get('id') != model.get('startedBy.id');
    })
  }.property('users'),
  summary: function () {
    return this.get('messages.lastObject.body');
  }.property('messages')
});
