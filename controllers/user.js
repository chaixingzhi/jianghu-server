const {Api}  = require('../utils/api');

let ModelType = 'User'


var fn_create_user = async (ctx, next) => {
    let resualt = await Api.create(ctx, ModelType)
    ctx.response.body = dataValues;
}
var fn_edit_user = async (ctx, next) => {
    let resualt = await Api.edit(ctx, ModelType)
    ctx.response.body = dataValues;
}
var fn_get_all_user = async (ctx, next) => {
    let resualt = await Api.getAll(ctx, ModelType)
    ctx.response.body = resualt;
}
var fn_get_one_user = async (ctx, next) => {
    let resualt = await Api.getOne(ctx, ModelType)
    ctx.response.body = resualt;
}
var fn_delete_one_user = async (ctx, next) => {
    let resualt = await Api.deleteOne(ctx, ModelType)
    ctx.response.body = resualt;
}

let muduleExport = {
    'POST /user/create': fn_create_user,
    'POST /user/edit': fn_edit_user,
    'POST /user/getAll': fn_get_all_user,
    'GET /user/getOne/:id': fn_get_one_user,
    'DELETE /user/deleteOne/:id': fn_delete_one_user,
};
module.exports = muduleExport;