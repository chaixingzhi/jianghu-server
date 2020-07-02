const {Api}  = require('../utils/api') 

var fn_save_blog = async (ctx, next) => {
  let resualt = await Api.create(ctx, 'Blog')
  console.log('resualt: ', resualt)
  ctx.response.body = {
    code: 200,
    message: resualt.dataValues
  };
}
var fn_get_blogs = async (ctx, next) => {
  let resualt = await Api.getAll(ctx, 'Blog')
  console.log('resualt', resualt)
  ctx.response.body = {
    code: 200,
    message: resualt
  };
}
var fn_get_blogs_detail = async (ctx, next) => {
  let resualt = await Api.getOne(ctx, 'Blog')
  console.log('resualt', resualt)
  ctx.response.body = {
    code: 200,
    message: resualt
  };
}

module.exports = {
  'POST /blog/save': fn_save_blog,
  'POST /blog/get': fn_get_blogs,
  'GET /blog/getOne/:id': fn_get_blogs_detail,
};