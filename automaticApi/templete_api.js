const {Api}  = require('../utils/api');

let ModelType = 'Blog'


var fn_create_blog = async (ctx, next) => {
    let resualt = await Api.create(ctx, ModelType)
    ctx.response.body = resualt.dataValues;
}
var fn_edit_blog = async (ctx, next) => {
    let resualt = await Api.edit(ctx, ModelType)
    ctx.response.body = resualt.dataValues;
}
var fn_get_all_blog = async (ctx, next) => {
    let resualt = await Api.getAll(ctx, ModelType)
    ctx.response.body = resualt;
}
var fn_get_one_blog = async (ctx, next) => {
    let resualt = await Api.getOne(ctx, ModelType)
    ctx.response.body = resualt;
}
var fn_delete_one_blog = async (ctx, next) => {
    let resualt = await Api.deleteOne(ctx, ModelType)
    ctx.response.body = resualt;
}

let muduleExport = {
    'POST /blog/create': fn_create_blog,
    'POST /blog/edit': fn_edit_blog,
    'POST /blog/getAll': fn_get_all_blog,
    'GET /blog/getOne/:id': fn_get_one_blog,
    'DELETE /blog/deleteOne/:id': fn_delete_one_blog,
};
module.exports = muduleExport;