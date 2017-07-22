var models = require('../models');
var bluebird = require('bluebird');
var Sequelize = require('sequelize');
var chatDB = new Sequelize('chat', 'root', '');

// module.exports = {
//   messages: {
//     get: function (req, res) {
//       //console.log('content-type', res.con)
//       var data = {};
//       res.status(200);
//       res.type('application/json');
//       models.messages.read( (message) => {
//         console.log('RESULTS INSIDE CONTROLLER', message);
//         data.results = message;
//         res.send(JSON.stringify(data));
//       });
//     }, // a function which handles a get request for all messages
//     post: function (req, res) {
//       res.status(201);
//       models.messages.insert(req.body);
//       // console.log('REQ BODY', req.body);
//       res.send();
//     }, // a function which handles posting a message to the database
//     options: function(req, res) {
//       res.status(204);
//       res.send();
//     }
//   },

//   users: {
//     // Ditto as above
//     get: function (req, res) {
//       models.users.read( (results) => {
//         res.send(results);
//       });
//     },
//     post: function (req, res) {     
//       models.users.insert(req.body);
//       res.send();
//     },
//     options: function(req, res) {
//       res.status(204);
//       res.send();
//     }
//   }
// };

var userIdCounter = 0;
var messageIdCounter = 0;

var Users = chatDB.define('users', {
  // id: Sequelize.INTEGER,
  id: {
    type: Sequelize.INTEGER,
    defaultValue: userIdCounter++,
    primaryKey: true
  },
  username: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

var Messages = chatDB.define('messages', {
  // id: Sequelize.INTEGER,
  id: {
    type: Sequelize.INTEGER,
    defaultValue: messageIdCounter++,
    primaryKey: true
  },
  username: Sequelize.STRING,
  message: Sequelize.STRING,
  roomName: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});


module.exports = {
  messages: {
    get: function (req, res) {
      Messages.findAll({
        //attributes: [username, message, roomName, createdAt, updatedAt]
      })
        .then( (results) => {
          var resultsArray = [];
          for (var instance of results) {
            resultsArray.push(instance.dataValues);
          }
          var data = {results: resultsArray};
          res.json(data);
        });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      Messages.create({username: req.body.username, message: req.body.message, roomName: req.body.roomname})
        .then(() => {
          res.sendStatus(201);
        }); 
    }, // a function which handles posting a message to the database
    options: function(req, res) {
      res.status(204);
      res.send();
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      Users.findAll({
        //attributes: [username, message, roomName, createdAt, updatedAt]
      })
        .then( (results) => {
          var resultsArray = [];
          for (var instance of results) {
            resultsArray.push(instance.dataValues);
          }
          var data = {results: resultsArray};
          res.json(data);
        });
    },
    post: function (req, res) {    
      Users.create({username: req.body.username})
        .then(() => {
          res.sendStatus(201);
        }); 
    },
    options: function(req, res) {

    }
  }
};

