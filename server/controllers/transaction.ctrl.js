

class Transactionn {

    static async transactionn(req, res) {
        try {

            console.log('Server was hit with body ->> ', req.body);
            
            return res.status(HttpStatus.OK).send({ success : true, msg : `${req.body.amount} Added Successfully!`});

        } catch (err) {
            console.error(err);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ success : false, msg : 'Oops, Something went wrong!' });
        }
    }

}


export default Transactionn;