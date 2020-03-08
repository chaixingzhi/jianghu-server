const {Api}  = require('../utils/api') 

var fn_save_blog = async (ctx, next) => {
  let resualt = await Api.create(ctx, 'Blog')
  console.log('resualt: ', resualt)
  ctx.response.body = {
    code: 200,
    message: resualt.dataValues
  };
  
}

module.exports = {
  'POST /blog/save': fn_save_blog,
};