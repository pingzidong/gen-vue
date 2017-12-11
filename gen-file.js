var fs = require("fs")
// 导入路由
const routes = require('./gen-file/config/routes')
// 导入文件方法
const MkDir = require('./gen-file/mkDir')

fs.readFile('./template/vue-single.vue', 'utf8', function (err, tpl) {
    if (err) {
      return console.error(err);
    }

    // 打印目录树
    MkDir.dirTree(routes)

    // 创建文件夹
    MkDir.dirCreate(routes,'',  tpl)
});

