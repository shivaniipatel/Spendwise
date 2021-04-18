
import express from 'express';
const router = express.Router();

import {Transactionn} from './controllers/transaction.ctrl.js';

router.post('/transaction', Transactionn.transactionn);

// module.exports = router;
export {router};