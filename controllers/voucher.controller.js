const router = require("express").Router();
const VoucherService = require('../../services/voucher.service');
const auth = require('../middlewares/auth');
const server = require('../utils/responseHandler').errorHandler.server;

const create = async (req , res) => {

    try {

        let response = await VoucherService.create(req.body);

        res.status(response.code).send(response)

    } catch (e) {

        res.status(e.code || 500).send(e.code ? e : server('', e))

    }

};

router.post('/create', auth.authenticate, create);

module.exports = router;