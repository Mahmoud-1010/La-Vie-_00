const storeModel = require("../../db/models/store.model")
const myHelper = require("../helper")

class Admin{
    static activatePartner = async(req,res)=>{
        try{
            if(!req.user.role=='admin') throw new Error("you cannot do this proccess")
            const storeData  = await storeModel.findOne({_id:req.params.id})
            storeData.status = 'active'
            await storeData.save()
            myHelper.resHandler(res, 200, true, storeData, `you have activate ${storeData.storeName}`)

        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static removePartner = async(req,res)=>{
        try{
            if(!req.user.role=='admin') throw new Error("you cannot do this proccess")
            const storeData  = await storeModel.findOne({_id:req.params.id})
            storeData.status = 'non active'
            await storeData.save()
            myHelper.resHandler(res, 200, true, storeData, `you have deactivate ${storeData.storeName}`)

        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
}
module.exports = Admin