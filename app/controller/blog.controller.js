const blogModel = require("../../db/models/blog.model")
const myHelper = require("../helper")
class Blog{
    static addBlog = async(req,res)=>{
        try{
            const blogData = new blogModel({
                userId: req.user._id,
                ...req.body
            })
            await blogData.save()
            myHelper.resHandler(res, 200, true, blogData, "added")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static deleteBlog = async(req,res)=>{
        try{
            await blogModel.deleteOne({_id:req.params.id})   
            myHelper.resHandler(res, 500, true, '', "deleted")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)

        }
    }
    static editBlog = async(req,res)=>{
        try{
            let blog = await blogModel.findOneAndUpdate({_id:req.params.id},
                {
                    userId: req.user._id,
                    ...req.body
                }
            )
            myHelper.resHandler(res, 200, true, blog, "edit")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }   
    }
    static getAllBlogs = async(req,res)=>{
        try{
            let blogs = await blogModel.find()
            blogs.map((blog)=>blog=blog._doc)
            myHelper.resHandler(res, 200, true, blogs, "all blogs")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
        
    }
    static getSingleBlog = async(req,res)=>{
        try{
            const blog = await blogModel.findOne({_id:req.params.id})   
            myHelper.resHandler(res, 500, true, blog, "your single blog")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)

        }
    }
    
}

module.exports = Blog