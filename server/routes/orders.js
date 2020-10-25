const express = require('express');
const router = express.Router();
const orders = require('../controllers/orders');

router.get('/', orders.getOrders);
router.post('/', orders.addOrder);
router.put('/', orders.updateOrders);
router.delete('/', orders.deleteOrder);


module.exports = router;
