const mongoose = require("mongoose")

const urlSchema = mongoose.Schema({
    urlApi:{
        type:String,
        required:true

    },
    urlMethods:{
        type:String,
    },
    urlQuery:[
        {type:String}
    ],
    urlParams:[
        {type:String}
    ],
    roles:[
        {
            type:String,
            enum:['superAdmin','admin','regularUser','partner'],
        }
    ]
})

const Url = mongoose.model("Url", urlSchema)
module.exports=Url