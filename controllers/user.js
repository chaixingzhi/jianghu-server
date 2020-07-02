const {Api}  = require('../utils/api') 

var fn_save_blog = async (ctx, next) => {
  let resualt = await Api.getOne(ctx, 'User')
  ctx.response.body = {
    code: 200,
    message: 'success',
    data: resualt.dataValues
  };
  
}

module.exports = {
  'GET /user/:id': fn_save_blog,
};
