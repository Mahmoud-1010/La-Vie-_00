const storeModel = require("../../db/models/store.model")
const productModel = require("../../db/models/product.model")
const myHelper = require("../helper")

class Store{
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
            await myHelper.resHandler(res, 200, true, productData, 'plant added successfully')
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static removeProduct = async(req,res)=>{
        try{
            const productData = await productModel.findOneAndDelete({_id:req.params.id})
             await myHelper.resHandler(res, 200, true, productData, 'your product is deleted')
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
}
module.exports = Store