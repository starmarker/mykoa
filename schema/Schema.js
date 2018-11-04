var mongoose = require('mongoose');
var Schema =mongoose.Schema;

const Model=(model)=>{
    return new Schema(model);
}
module.exports=Model;