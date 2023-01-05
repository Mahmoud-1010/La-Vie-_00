const storeModel = require("../../db/models/store.model")
const plantModel = require("../../db/models/plant.model")
const myHelper = require("../helper")
const { json } = require("express")


class Store{
    static addStore = async(req,res)=>{
        try{
            const storeData = new storeModel({
                userId:req.user._id,
                ...req.body
            })
            await storeData.save()
            myHelper.resHandler(res, 200, true, storeData, 'your data are saved our team will contact you through 3 days')
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static addPlant = async(req,res)=>{
        try{
            const userId = req.user._id
            console.log(userId)
            const store = await storeModel.findOne({userId})
            console.log(store.storeName)
            const plantData = new plantModel({
                storeId:store._id,
                ...req.body
            })
            await plantData.save()
            myHelper.resHandler(res, 200, true, plantData, 'plant added successfully')
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
}
module.exports = Store