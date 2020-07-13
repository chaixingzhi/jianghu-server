const Model = require('../sequelize/model');
const Sequelize = require('sequelize');

/**
 * @Description: 处理数据
 * @param {type} 
 * @Date: 2020-07-02 18:19:23
 */
const formatParam = function(param) {
  if(Object.keys(param).includes('include')) {
    let includeParam = param['include']
    includeParam.map(item => {
      item.model = Model[item.model]
      return item
    })
    param['include'] = includeParam
  }
  // console.log('param: ', param)
  return param
}

exports.formatParam = formatParam;