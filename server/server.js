

import express from 'express';
const app = express();
import path from 'path';
import dotenv from 'dotenv';
import {router} from './router.js';
import cors from 'cors';

dotenv.config({ path : path.resolve() +'/server/.env' });

import HttpStatus from 'http-status-codes';
global.HttpStatus = HttpStatus;

app.set('port',  process.env.PORT || 9001);

let corsOptionDelegate = (req, callback) => {
    let corsOptions;
    if ( (process.env.ALLOWED_ORIGIN).includes(req.header('Origin')) ) {
        corsOptions = {origin : true}
    } else {
        corsOptions = {origin : false}
    }
    callback(null, corsOptions)
}

app.use('*', (req, res, next) => {
    res.set({
		'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN,
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
		'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
    })

    cors(corsOptionDelegate)(req, res, next);

});

app.use(express.json());
app.use(express.urlencoded({ extended : false}))

app.use('/api', router);

app.listen(app.get('port'), (err) => {
    if(err) {
        console.log(`Error will running the server at port ${app.get('port')} | ${err}`);
    } else {
        console.log(`Express server listening at port ${app.get('port')}`);
    }
})