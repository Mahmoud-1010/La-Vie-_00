const storeModel = require("../../db/models/store.model")
const productModel = require("../../db/models/product.model")
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
    static addProduct = async(req,res)=>{
        try{
            const userId = req.user._id
            console.log(userId)
            const store = await storeModel.findOne({userId})
            console.log(store.storeName)
            const productData = new productModel({
                storeId:store._id,
                ...req.body
            })
            await productData.save()
            myHelper.resHandler(res, 200, true, productData, 'plant added successfully')
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
}
module.exports = Store