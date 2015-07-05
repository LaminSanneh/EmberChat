/**
* ChatSession.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    type: { type: 'text', required: true},
    users: {
      collection: 'user',
      via: 'chatSessions'
    },
    messages: {
      collecton: 'message',
      via: 'chatSession'
    } 
  }
};

