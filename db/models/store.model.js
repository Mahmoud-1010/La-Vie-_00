const mongoose = require("mongoose")

const storeSchema = mongoose.Schema({
    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
    },
    storeName:{
        type:String
    },
    noOfBranches:{
        type:Number
    },
    storeType:{
        type:String,
        enum:['sell seeds','sell plants','sell seeds and plants']
    },
    WebsiteOrSocialMediaUrl:{
        type:String
    },
    restaurantAddresses: [
        {
            type:String
        }
    ],
    phoneNum:{
        type: String,
        validate(value){
            if(!validator.isMobilePhone(value, "ar-EG"))
                throw new Error ("invalid number")
        }
    }, 
    status:{
        type:String,
        enum:['active','non active'],
        default:'non active'
    }, 
})

const Store = mongoose.model("Store", storeSchema)
module.exports=Store