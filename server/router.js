
import express from 'express';
const router = express.Router();

import TransactionCtrl from './controllers/transaction.ctrl.js';

router.post('/transaction', TransactionCtrl.transactionn);

export {router};