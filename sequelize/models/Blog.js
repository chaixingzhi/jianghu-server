const db = require('../db');
const User = require('./User')

const Blog = db.defineModel('blog', {
  title: {
    type: db.STRING(100),
    allowNull: true
  },
  author_id: {
    type: db.STRING(50),
    allowNull: true
  },
  category_id: {
    type: db.STRING(50),
    allowNull: true
  },
  tag_id: {
    type: db.STRING(50),
    allowNull: true
  },
  content: {
    type: db.TEXT,
    allowNull: true
  },
  content_html: {
    type: db.TEXT,
    allowNull: true
  },
  is_public: {
    type: db.BOOLEAN,
    allowNull: true
  },
  is_draft: {
    type: db.BOOLEAN,
    allowNull: true
  }
});
// Blog.belongsTo(User,{foreignKey: 'author_id', targetKey: 'id'});

module.exports = Blog;
