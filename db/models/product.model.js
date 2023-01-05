const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    storeId:{
        type:mongoose.Schema.Types.ObjectId,
        // required:true
    },
    productName:{
        type:String
    },
    productDescription:{
        type:String
    },
    productImg:{
        type:String
    },
    noOfAvailableCopy:{
        type:Number
    },
    qualificationLevel:{
        type:String,
        enum:['beginner','advanced','professional']
    }
})
const Product =  mongoose.model("Product",productSchema)
module.exports=Product