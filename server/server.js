

import express from 'express';
const app = express();
import path from 'path';
import dotenv from 'dotenv';
import {router} from './router.js';

dotenv.config({ path : path.resolve() +'/server/.env' });

import HttpStatus from 'http-status-codes';
global.HttpStatus = HttpStatus;

app.set('port',  process.env.PORT || 9001);

app.use(express.json());
app.use(express.urlencoded({ extended : false}));

app.use('/api', router);

app.listen(app.get('port'), (err) => {
    if(err) {
        console.log(`Error will running the server at port ${app.get('port')} | ${err}`);
    } else {
        console.log(`Express server listening at port ${app.get('port')}`);
    }
})