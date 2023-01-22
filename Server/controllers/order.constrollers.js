const order = require('../models/order.model')

const getorders = async (req,res)=>{
    try {
        const ordermsg = await order.find()
        res.status(200).json({Order:ordermsg})
    } catch (error) {
        res.status(500).json(error)
    }
}
const addorder = async (req,res)=>{
    try {
        const ordermsg = await order.create(req.body)
        res.status(200).json({Order:ordermsg});
    } catch (error) {
        res.status(500).json(error)
    }
}
const getsingleorder = async (req,res)=>{
   try {
    const ordermsg = await order.findOne({_id:req.params.id})
    res.status(200).json({order:ordermsg})
   } catch (error) {
    res.status(500).json(error)
   }
}
const updateorder = async (req,res)=>{
    try {
    const ordermsg = await order.findOneAndUpdate({_id:req.params.id},req.body,{
        new:1,runValidators:1
    })
    res.status(200).json(ordermsg)
    } catch (error) {
    res.status(500).json(error)
    }    
}

const deleteorder = async (req,res)=>{
    try {
        const ordermsg = await order.findOneAndDelete({_id:req.params.id})
        res.status(200).json(ordermsg)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {deleteorder,updateorder,addorder,getorders,getsingleorder}