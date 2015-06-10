/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
bcrypt = require('bcrypt-nodejs');

module.exports = {

  attributes: {
  	username: { type: 'text', required: true, unique: true },
    password: { type: 'text' },
    anonymous: { type: 'boolean', defaultsTo: false },
	isConnected: { type: 'boolean', defaultsTo: true }
  },
  signup: function (inputs, cb) {
    
    if(inputs.anonymous){
      User.create({
        username: inputs.username,
        password: '',
        anonymous: true
      })
      .exec(cb);
    }
    else{
      User.create({
        username: inputs.username,
        password: inputs.password,
        anonymous: false
      })
      .exec(cb);
    }
  },
  
  attemptLogin: function (inputs, cb) {
    User.findOne({
      username: inputs.username
    })
    .exec(cb);
  },
  beforeCreate: function(values, cb) {

    values.password = bcrypt.hashSync(values.password);
    cb();
  }
};

