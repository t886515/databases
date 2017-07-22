
-- CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  -- userId INTEGER PRIMARY KEY,
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username TEXT(10),
  createdAt DATETIME,
  updatedAt DATETIME 
);

-- CREATE TABLE users_friends (
--   id INTEGER PRIMARY KEY,
--   user_id INTEGER NOT NULL,
--   friends_username TEXT(10) NOT NULL,
--   FOREIGN KEY (user_id) references users(user_id)
-- );


CREATE TABLE messages (
  /* Describe your table here.*/
  -- messageId INTEGER PRIMARY KEY,
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username TEXT NOT NULL, /* Foreign key to connect message to a user*/
  message TEXT(100),
  roomName TEXT(15) NOT NULL,
  createdAt DATETIME,
  updatedAt DATETIME 
);

/* Create other tables and define schemas


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

