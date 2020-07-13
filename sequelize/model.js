const fs = require('fs');
const db = require('./db');
const Blog = require('./models/Blog');
const User = require('./models/User');
const Category = require('./models/Category');

let files = fs.readdirSync(__dirname + '/models');

let js_files = files.filter((f)=>{
    return f.endsWith('.js');
}, files);
module.exports = {};

for (let f of js_files) {
    console.log(`import model from file ${f}...`);
    let name = f.substring(0, f.length - 3);
    module.exports[name] = require(__dirname + '/models/' + f);
}
Blog.belongsTo(User,{foreignKey: 'author_id', targetKey: 'id'});
Category.belongsTo(User,{foreignKey: 'user_id', targetKey: 'id'});
User.hasMany(Blog,{foreignKey: 'author_id', sourceKey: 'id'});
User.hasMany(Category,{foreignKey: 'user_id', sourceKey: 'id'});

module.exports.sync = () => {
    db.sync();
};

