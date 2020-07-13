const db = require('../db');
const User = require('./User');

const Category = db.defineModel('category', {
  name: {
    type: db.STRING(100),
    allowNull: true,
  },
  user_id: {
    type: db.STRING(50),
    allowNull: true,
  }
});
// Category.belongsTo(User,{foreignKey: 'user_id', targetKey: 'id'});
module.exports = Category;