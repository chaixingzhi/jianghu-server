const model = require('./sequelize/model');
model.sync();
console.log('init db ok.');
process.exit(0);