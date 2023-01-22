const express = require("express");
const orderroute = express.Router()
const {deleteorder,updateorder,addorder,getorders,getsingleorder} = require('../controllers/order.constrollers')

orderroute.route('/order').get(getorders).post(addorder)
orderroute.route('/order/:id').patch(updateorder).delete(deleteorder).get(getsingleorder)


module.exports = orderroute