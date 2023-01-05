const userModel = require("../../db/models/user.model")
const urlModel = require("../../db/models/url.model")
const myHelper = require("../../app/helper")
const jwt = require("jsonwebtoken")
const auth = async(req, res, next) => {
    try{
        const token = req.header("Authorization").replace("Bearer ", "")
        const decodedToken = jwt.verify(token, process.env.tokenPass)
        const userData = await userModel.findOne({
            _id: decodedToken._id,
            "tokens.token": token
        })
        if(!userData) throw new Error("inalid token")
        req.user = userData
        req.token = token
        next()
    }
    catch(e){
        myHelper.resHandler(res, 500, false, e.message, "unauthorized")
    }
}

const getPermissioon = async(req, res, next) => {
    try{
        console.log(req.url)
        const reqUrl  = req.url.replace(`/${req.params.id}`,"")
        console.log(reqUrl)
        const url = await urlModel.findOne({urlApi:reqUrl})
        const role = url.roles.find((e)=>e==req.user.role)
        console.log(role)
        if(!role) throw new Error("you don't have permission for this process")
        next()
    }
    catch(e){
        myHelper.resHandler(res, 500, false, e.message, "you don't have permission")
    }
}

module.exports = {auth,getPermissioon}