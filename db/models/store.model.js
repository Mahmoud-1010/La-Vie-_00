const mongoose = require("mongoose")

const storeSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
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
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
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
    // email:{
    //     type:String, 
    //     trim:true,
    //     lowercase:true,
    //     required:true,
    //     unique: true,
    //     validate(value){
    //         if(!validator.isEmail(value)){
    //             throw new Error("invalid email format")
    //         }
    //     }
    // },
    contactRole:{
        type:String,
        enum:['owner','co owner','manager','employee']
    }
})

const Store = mongoose.model("Store", storeSchema)
module.exports=Store