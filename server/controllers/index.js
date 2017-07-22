var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //console.log('content-type', res.con)
      var data = {};
      res.status(200);
      res.type('application/json');
      models.messages.read( (message) => {
        //console.log('RESULTS INSIDE CONTROLLER', results);
        data.results = message;
        res.send(JSON.stringify(data));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.status(201);
      models.messages.insert(req.body);
      // console.log('REQ BODY', req.body);
      res.send();
    }, // a function which handles posting a message to the database
    options: function(req, res) {
      res.status(204);
      res.send();
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.read( (results) => {
        res.send(results);
      });
    },
    post: function (req, res) {     
      models.users.insert(req.body);
      res.send();
    },
    options: function(req, res) {
      res.status(204);
      res.send();
    }
  }
};

