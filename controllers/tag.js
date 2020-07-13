const {Api}  = require('../utils/api');

let ModelType = 'Tag'


var fn_create_tag = async (ctx, next) => {
    let resualt = await Api.create(ctx, ModelType)
    ctx.response.body = dataValues;
}
var fn_edit_tag = async (ctx, next) => {
    let resualt = await Api.edit(ctx, ModelType)
    ctx.response.body = dataValues;
}
var fn_get_all_tag = async (ctx, next) => {
    let resualt = await Api.getAll(ctx, ModelType)
    ctx.response.body = resualt;
}
var fn_get_one_tag = async (ctx, next) => {
    let resualt = await Api.getOne(ctx, ModelType)
    ctx.response.body = resualt;
}
var fn_delete_one_tag = async (ctx, next) => {
    let resualt = await Api.deleteOne(ctx, ModelType)
    ctx.response.body = resualt;
}

let muduleExport = {
    'POST /tag/create': fn_create_tag,
    'POST /tag/edit': fn_edit_tag,
    'POST /tag/getAll': fn_get_all_tag,
    'GET /tag/getOne/:id': fn_get_one_tag,
    'DELETE /tag/deleteOne/:id': fn_delete_one_tag,
};
module.exports = muduleExport;