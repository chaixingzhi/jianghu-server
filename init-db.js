const model = require('./sequelize/model');
model.sync();

console.log('init db ok.');
process.exit(0);
console.log('model: ',model)
// model.Blog.sync({ force: true });
// model.Tag.sync({ force: true });
// model.User.sync({ force: true });
// model.Category.sync({ force: true });