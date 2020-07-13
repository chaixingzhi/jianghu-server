const fs = require('fs');

const automaticApi = function(ModelName) {
    let lowerModel = ModelName.toLowerCase()
    fs.readFile('./templete_api.js', 'utf8',(err, data) => {
        var sReg = new RegExp("blog","g");
        data = data.replace(sReg, lowerModel);
        var uReg = new RegExp("Blog", "g");
        data = data.replace(uReg, ModelName);
        console.log('获取的js内容：', data)
        fs.writeFile(`../controllers/${lowerModel}.js`, data, {flag: 'w'}, (err, data) => {
            console.log('写入的文档：', data)
        })
    })
}

const main = function() {
    let files = fs.readdirSync('../sequelize' + '/models');
    let js_files = files.filter((f)=>{
        return f.endsWith('.js');
    }, files);
    for (let f of js_files) {
        console.log(`import model from file ${f}...`);
        let name = f.substring(0, f.length - 3);

    }
    let ModelStrings = js_files.map(file => {
        return file.substring(0, file.length - 3);
    })

    for (let f of ModelStrings) {
        automaticApi(f)
    }
}

main();
