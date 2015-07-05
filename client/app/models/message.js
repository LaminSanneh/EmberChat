import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  dateSent: DS.attr('date'),
  chatSession: DS.belongsTo('chatSession')
});
