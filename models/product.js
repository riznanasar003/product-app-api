const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "proid":{type:String,required:true},
        "proname":{type:String,required:true},
        "mandate":{type:String,required:true},
        "price":{type:String,required:true}
        
    }

)

let productmodel = mongoose.model("products",schema);

module.exports = {productmodel}