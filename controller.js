const fs = require('fs');

function addMapping(router, mapping) {
  for (var url in mapping) {
      if (url.startsWith('GET ')) {  // 处理get请求
        var path = url.substring(4);
        router.get(path, mapping[url]);
        console.log(`register URL mapping: GET ${path}`);
      } else if (url.startsWith('POST ')) { // 处理post请求
        var path = url.substring(5);
        router.post(path, mapping[url]);
        console.log(`register URL mapping: POST ${path}`);
      } else if (url.startsWith('DELETE ')){
        var path = url.substring(7);
        router.delete(path, mapping[url]);
        console.log(`invalid URL: ${url}`);
      }
  }
}

function addControllers(router) {
  var files = fs.readdirSync(__dirname + '/controllers'); // 返回包含/controllers目录下所有文件名的数组
  var js_files = files.filter((f) => { // 过滤其中文件类型为js的文件名
      return f.endsWith('.js');
  });

  for (var f of js_files) {
      console.log(`process controller: ${f}...`);
      let mapping = require(__dirname + '/controllers/' + f);
      addMapping(router, mapping);
  }
}


module.exports = function (dir) {
  let
      controllers_dir = dir || 'controllers', // 如果不传参数，扫描目录默认为'controllers'
      router = require('koa-router')();
  addControllers(router, controllers_dir);
  return router.routes();
};