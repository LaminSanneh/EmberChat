module.exports = function(app) {
  var express = require('express');
  var messagesRouter = express.Router();
  var messages = [
    {
      id: 1,
      body: 'Test body from mock',
      sentDate: '2015-03-21T12:10:25+00:00'
    }
  ];

  messagesRouter.get('/', function(req, res) {
    res.send({
      'messages': messages
    });
  });

  messagesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  messagesRouter.get('/:id', function(req, res) {
    res.send({
      'messages': {
        id: req.params.id
      }
    });
  });

  messagesRouter.put('/:id', function(req, res) {
    res.send({
      'messages': {
        id: req.params.id
      }
    });
  });

  messagesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/messages', messagesRouter);
};
