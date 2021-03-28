
const express = require('express');
const router = express.Router();

const somethingCtrl = require('./controllers/something.ctrl');

router.get('/hello', somethingCtrl.getHello);

module.exports = router;