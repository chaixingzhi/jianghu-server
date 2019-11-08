const db = require('../db');

module.exports = db.defineModel('category', { 
  name: {
    type: db.STRING(100),
    allowNull: true,
  },
  user_id: {
    type: db.STRING(50),
    allowNull: true,
  }
});