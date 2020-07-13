const db = require('../db');
const Blog = require('./Blog');
const Category = require('./Category');
const Tag = require('./Tag');


const User = db.defineModel('user', { // user表建模
  loginid: {
    type: db.STRING(100),
    allowNull: true
  },
  password: {
    type: db.STRING(100),
    allowNull: true
  },
  alias: {
    type: db.STRING(50),
    allowNull: true
  },
  phone: {
    type: db.STRING(50),
    allowNull: true
  },
  email: {
    type: db.STRING(50),
    allowNull: true
  },
  age: {
    type: db.STRING(50),
    allowNull: true
  },
  gender: {
    type: db.STRING(50),
    allowNull: true
  },
  avatar: {
    type: db.STRING(100),
    allowNull: true
  },
  user_name: {
    type: db.STRING(50),
    allowNull: true
  }
});


module.exports = User;