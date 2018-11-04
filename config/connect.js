const config= require("../config/config");
const mongoose =require("mongoose")
const db = mongoose.connect(config.DATABASE_URL+':'+config.DATABASE_PORT+'/'+config.DATABASE_NAME);
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
    throw new Error('数据库链接失败，请核对配置文件')
});
db.connection.on("open", function () {
    console.log("------数据库连接成功！------");
});
module.exports=db;