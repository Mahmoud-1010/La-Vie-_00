const storeModel = require("../../db/models/store.model")
const userModel = require("../../db/models/user.model")
const myHelper = require("../helper")

class Admin{
    static activatePartner = async(req,res)=>{
        try{
            const storeData  = await storeModel.findOneAndUpdate({_id:req.params.id},{status:'active'})
            // storeData.status = 'active'
            const ownerData = await userModel.findOneAndUpdate({_id:storeData.ownerId},{role:"partner"})
            // console.log(ownerData)
            // await storeData.save()
            myHelper.resHandler(res, 200, true, storeData, `you have activate ${storeData.storeName} which his owner${ownerData.fName} `)

        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static removePartner = async(req,res)=>{
        try{
            const storeData  = await storeModel.findOneAndUpdate({_id:req.params.id},{status:'non active'})
            // storeData.status = 'active'
            const ownerData = await userModel.findOneAndUpdate({_id:storeData.ownerId},{role:"regularUser"})
            // console.log(ownerData)
            // await storeData.save()
            myHelper.resHandler(res, 200, true, storeData, `you have activate ${storeData.storeName} which his owner${ownerData.fName} `)

        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
}
module.exports = Admin