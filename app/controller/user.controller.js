const userModel = require("../../db/models/user.model")
const storeModel = require("../../db/models/store.model")
const myHelper = require("../helper")
const jwt  = require("jsonwebtoken")
class User{
    static register = async(req,res)=>{
        try{
            const user = await userModel.findOne({email:req.body.email})
            if(user) throw new Error("repeted email")
            if(req.body.password.length<6) throw new Error("password must be more than 6")
            const userData = new userModel(req.body)
            await userData.save()
            myHelper.resHandler(res, 200, true, userData, "user added successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static login = async(req,res) => {
        try{
            const userData = await userModel.loginUser(req.body.email, req.body.password)
            const token = await userData.generateToken()
            myHelper.resHandler(res, 200, true, {user:userData, token}, "user added successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static logout = async(req,res) => {
        try{
            const userData = await userModel.findOne({
                "tokens.token": req.token
            })
            const index = userData.tokens.indexOf(req.token);
            const x = userData.tokens.splice(index, 1);
            await userData.save()
            myHelper.resHandler(res, 200, true, userData, "you are loged out successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static addQualification = async(req,res)=>{
        try{
            const userData  = req.user
            userData.qualification = req.body.qualification
            await userData.save()
            myHelper.resHandler(res, 200, true, userData,   `you are qualified as ${userData.qualification}`)
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static editProfileData = async(req,res)=>{
        try{
            const userData =await userModel.findOneAndUpdate({"tokens.token": req.token},{...req.body})
            await userData.save()
            myHelper.resHandler(res, 200, true, userData,  'edited')
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }


    static addStore = async(req,res)=>{
        try{
            const storeData = new storeModel({
                ownerId:req.user._id,
                ...req.body
            })
            await storeData.save()
            myHelper.resHandler(res, 200, true, storeData, 'your data are saved our team will contact you through 3 days')
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }


    static bookmarkBlog = async(req,res)=>{
        try{
            // const blog = await blogModel.findOne({_id:req.params.id})
            const userData = req.user
            userData.bookmarkBlogs.push(req.params.id)
            await userData.save()
            myHelper.resHandler(res, 500, true, userData, "your single blog")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static bookmarkProduct = async(req,res)=>{
        try{
            // const blog = await blogModel.findOne({_id:req.params.id})
            const userData = req.user
            userData.bookmarkProducts.push(req.params.id)
            await userData.save()
            myHelper.resHandler(res, 500, true, userData, "your single blog")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static removeBlogFromBookmark = async(req,res)=>{
        try{
            // const blog = await blogModel.findOne({_id:req.params.id})
            const userData = req.user
            var index = userData.bookmarkBlogs.indexOf(req.params.id);
            if (index !== -1) {
                userData.bookmarkBlogs.splice(index, 1);
            }
            // userData.shoppingCartsProducts.push(req.params.id)
            await userData.save()
            myHelper.resHandler(res, 500, true, userData, "your single blog")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static removeProductFromBookmark = async(req,res)=>{
        try{
            // const blog = await blogModel.findOne({_id:req.params.id})
            const userData = req.user
            var index = userData.bookmarkProducts.indexOf(req.params.id);
            if (index !== -1) {
                userData.bookmarkProducts.splice(index, 1);
            }
            // userData.shoppingCartsProducts.push(req.params.id)
            await userData.save()
            myHelper.resHandler(res, 500, true, userData, "your single blog")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static addProductToShoppingCart = async(req,res)=>{
        try{
            // const blog = await blogModel.findOne({_id:req.params.id})
            const userData = req.user
            userData.shoppingCart.push(req.params.id)
            await userData.save()
            myHelper.resHandler(res, 500, true, userData, "your single blog")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static deleteProductFromShoppingCart = async(req,res)=>{
        try{
            // const blog = await blogModel.findOne({_id:req.params.id})
            const userData = req.user
            var index = userData.shoppingCart.indexOf(req.params.id);
            if (index !== -1) {
                userData.shoppingCart.splice(index, 1);
            }
            // userData.shoppingCartsProducts.push(req.params.id)
            await userData.save()
            myHelper.resHandler(res, 500, true, userData, "your single blog")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    




}
module.exports = User