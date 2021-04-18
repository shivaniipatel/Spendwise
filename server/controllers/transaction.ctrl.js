

class Transactionn {

    static async transactionn(req, res) {
        try {

            console.log('Adding a transaction');

            await db.from('public.transactions')
                .insert({amount: req.body.amount, trx_type: 'DEBIT'});
            
            return res.status(HttpStatus.OK).send({ success : true, msg : `${req.body.amount} Added Successfully!`});

        } catch (err) {
            console.error(err);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ success : false, msg : 'Oops, Something went wrong!' });
        }
    }

}


export default Transactionn;