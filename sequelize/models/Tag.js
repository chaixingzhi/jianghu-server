const db = require('../db');

module.exports = db.defineModel('tag', { // user表建模
  name:{
    type: db.STRING(100),
    allowNull: true
  }, 
  color:{
    type: db.STRING(20),
    allowNull: true
  }, 
  user_id:{
    type: db.STRING(20),
    allowNull: true
  }
});