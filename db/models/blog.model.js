const mongoose = require("mongoose")
const Blog = mongoose.model("Blog", {
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
    },
    blogQaulification:{
        type:String,
        enum:['beginner','advanced','professional']
    },
    blogType:{
        type:String,
        enum:["txt", "file"],
        required:true,
        trim:true,
        lowercase:true
    },
    content:{
        type:String,
        default:"",
        required: function(){
            return this.blogType=="txt"
        }
    },
    file:{
        type:String,
        default:"",
        required: function(){
            return this.blogType!="txt"
        }
    },
    reviews:[{
        userName:{type:String},
        date:{type:String},
        rate:{type:Number},
        review:{type:String}
    
    }]


})
module.exports=Blog