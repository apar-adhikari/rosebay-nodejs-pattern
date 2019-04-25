const router = require("express").Router();

const voucher = require('./controllers/voucher.controller');
const customer = require('./controllers/customer.controller');

router.use('/voucher', voucher);
router.use('/customer', customer);

module.exports = router;