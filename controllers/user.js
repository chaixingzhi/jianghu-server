const {Api}  = require('../utils/api') 

var fn_save_blog = async (ctx, next) => {
  let resualt = await Api.getOne(ctx, 'User')
  console.log('resualt: ', resualt)
  ctx.response.body = {
    code: 200,
    message: resualt.dataValues
  };
  
}

module.exports = {
  'GET /user:id': fn_save_blog,
};
