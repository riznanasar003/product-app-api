const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "proid":String,
        "proname":String,
        "mandate":String,
        "price":String
        
    }

)

let productmodel = mongoose.model("products",schema);

module.exports = {productmodel}