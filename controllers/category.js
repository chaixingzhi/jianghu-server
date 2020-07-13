const {Api}  = require('../utils/api');

let ModelType = 'Category'


var fn_create_category = async (ctx, next) => {
    let resualt = await Api.create(ctx, ModelType)
    ctx.response.body = dataValues;
}
var fn_edit_category = async (ctx, next) => {
    let resualt = await Api.edit(ctx, ModelType)
    ctx.response.body = dataValues;
}
var fn_get_all_category = async (ctx, next) => {
    let resualt = await Api.getAll(ctx, ModelType)
    console.log('resualt: ', resualt)
    ctx.response.body = resualt;
}
var fn_get_one_category = async (ctx, next) => {
    let resualt = await Api.getOne(ctx, ModelType)
    ctx.response.body = resualt;
}
var fn_delete_one_category = async (ctx, next) => {
    let resualt = await Api.deleteOne(ctx, ModelType)
    ctx.response.body = resualt;
}

let muduleExport = {
    'POST /category/create': fn_create_category,
    'POST /category/edit': fn_edit_category,
    'POST /category/getAll': fn_get_all_category,
    'GET /category/getOne/:id': fn_get_one_category,
    'DELETE /category/deleteOne/:id': fn_delete_one_category,
};
module.exports = muduleExport;