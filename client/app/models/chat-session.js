import DS from 'ember-data';

export default DS.Model.extend({
  users: DS.hasMany('user'),
  messages: DS.hasMany('message'),
  type: DS.attr(),
  startedBy: DS.belongsTo('user'),
  title: function(){
    var model = this;
    var title = this.get('users').filter(function(user){
      return user.get('id') != model.get('startedBy.id');
    }).mapBy('username').join(',');
    // this.get('users').forEach(function());
    return title;
  }.property('type', 'users.length'),
  summary: function () {
    return this.get('messages.lastObject.body');
  }.property('messages')
});
