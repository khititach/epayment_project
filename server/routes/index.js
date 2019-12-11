const express = require('express');

const epaymentctrl = require('../config/epayment_control');

const router = express.Router();

router.get('/', epaymentctrl.login);

// router.get('/',(req ,res) => res.send("test index file"))

module.exports = router;