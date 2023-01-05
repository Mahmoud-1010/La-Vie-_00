const userModel = require("../../db/models/user.model")
const urlModel = require("../../db/models/url.model")
const myHelper = require("../helper")
class SuperAdmin{

    static addAdmin = async(req,res)=>{
        try{
            const userData  = await userModel.findOne({email:req.body.email})
            userData.role='admin'
            await userData.save()
            myHelper.resHandler(res, 200, true, userData, `you have added ${userData.fName} ${userData.lName} to admins`)

        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static removeAdmin = async(req,res)=>{
        try{
            const userData  = await userModel.findOne({email:req.body.email})
            userData.role='regularUser'
            await userData.save()
            myHelper.resHandler(res, 200, true, userData, `you have removed ${userData.fName} ${userData.lName} from admins`)

        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static addUrl = async(req,res)=>{
        try{
            if(!req.user.role=='superAdmin') throw new Error("you cannot do this proccess")
            const reqUrl = req.body.urlApi
            console.log(reqUrl)
            const url = await urlModel.findOne({urlApi:reqUrl})
            // console.log(url.urlApi)
            if(url) throw new Error("this url have added befor")
            const urlData  = new urlModel({
                ...req.body
            })
            await urlData.save()
            myHelper.resHandler(res, 200, true, urlData, `you have add new url ${urlData.urlApi}`)

        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
}
module.exports = SuperAdmin