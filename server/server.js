

const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const router = require('./router.js');

dotenv.config({ path : path.resolve(__dirname) +'/.env' });

global.HttpStatus = require('http-status-codes');

app.set('port',  process.env.PORT || 3000);

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