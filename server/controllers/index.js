var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body);
      models.messages.post(req.body);
      res.send();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log(req.url, ' user get----------------------------------------');
    },
    post: function (req, res) {
     
      console.log(req.body.username);
      models.users.post(req.body);
      //console.log(req.body);
      res.send();
    }
  }
};

