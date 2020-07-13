const db = require('../db');
const User = require('./User');

const Tag = db.defineModel('tag', { // user表建模
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
// Tag.belongsTo(User,{foreignKey: 'user_id', targetKey: 'id'});

module.exports = Tag;