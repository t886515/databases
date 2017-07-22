var db = require('../db');
var Sequelize = require('sequelize');
// var chatDB = new Sequelize('chat', 'root', 'plantlife');
const mysql = require('mysql');

var userIdCounter = 0;
var messageIdCounter = 0;

db.connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected!');
});

module.exports = {
  messages: {
    get: function (callback) {
      var search = 'SELECT * FROM messages'; // ADD DATES AT A LATER TIME
      db.connection.query(search, (err, results) => {
        if (err) {
          throw err;
        }
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (messageObj) {
      console.log('did i get here?');
      messageIdCounter = messageIdCounter++;
      var insert = 'INSERT INTO messages (id, username, message, roomName) VALUES (?, ?, ?, ?)'; // ADD DATES AT A LATER TIME
      db.connection.query(insert, [messageIdCounter, messageObj.username, messageObj.message, messageObj.roomname], (err) => {
        if (err) {
          throw err;
        }
      });
    }
// a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var search = 'SELECT * FROM users'; // ADD DATES AT A LATER TIME
      db.connection.query(search, (err, results) => {
        if (err) {
          throw err;
        }
        callback(results);
      });
    },
    post: function (usernameObj) {
      userIdCounter = userIdCounter++;
      var insert = 'INSERT INTO users (id, username) VALUES (?, ?)'; // ADD DATES AT A LATER TIME
      db.connection.query(insert, [userIdCounter, usernameObj.username], (err) => {
        if (err) {
          throw err;
        }
      });
      // db.connection.query('SELECT * FROM messages', [], (err, results) => {
      //   console.log(results, 'DO I GET NAYTHING HERE???');
      // });
    }
  }
};

// var Users = chatDB.define('users', {
//   // id: Sequelize.INTEGER,
//   id: {
//     type: Sequelize.INTEGER,
//     defaultValue: userIdCounter++,
//     primaryKey: true
//   },
//   username: Sequelize.STRING,
//   createdAt: Sequelize.DATE,
//   updatedAt: Sequelize.DATE
// });

// var Messages = chatDB.define('messages', {
//   // id: Sequelize.INTEGER,
//   id: {
//     type: Sequelize.INTEGER,
//     defaultValue: messageIdCounter++,
//     primaryKey: true
//   },
//   username: Sequelize.STRING,
//   message: Sequelize.STRING,
//   roomName: Sequelize.STRING,
//   createdAt: Sequelize.DATE,
//   updatedAt: Sequelize.DATE
// });

// module.exports = {
//   messages: {
//     get: function () {}, // a function which produces all the messages
//     post: function (messagesObj) {
//       console.log(messagesObj, '------------INSIDE MESSAGES SEQULIZE=============');
//       Messages.sync()
//         .then(() => {
//           return Messages.create({username: messagesObj.username, message: messagesObj.message, roomName: messagesObj.roomname});
//         });
//     } // a function which can be used to insert a message into the database
//   },

//   users: {
//     // Ditto as above.
//     get: function () {},
//     post: function (usernameObj) {
//       console.log(' INSIDE Sequelize -------------------------------------');
//       Users.sync()
//         .then(() => {
//           return Users.create({username: usernameObj.username});
//         });
//     }
//   }
// };

