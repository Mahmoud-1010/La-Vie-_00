const mongoose = require("mongoose")

const plantSchema = mongoose.Schema({
    storeId:{
        type:mongoose.Schema.Types.ObjectId,
        // required:true
    },
    plantName:{
        type:String
    },
    plantDescription:{
        type:String
    },
    plantImg:{
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
const Plant =  mongoose.model("Plant",plantSchema)
module.exports=Plant