const express = require('express');
const router = express.Router();
const orders = require('../controllers/orders');
/* add order . */
router.post('/api/order/add', orders.getOrders);

router.post('/api/order/update',(req, res) => {
    res.send(201, req.body)
})
router.delete('/api/order/delete',(req, res) => {
    res.send(201, req.body)
})
router.get('/api/',(req, res) => {
    console.log('orders list');
    res.send(201, req.body)
})

module.exports = router;
