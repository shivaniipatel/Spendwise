

class Transactionn {

    static async transactionn(req, res) {
        try {


            
            return res.status(HttpStatus.OK).send({ success : true, msg : 'Transactionn Added Successfully!'});

        } catch (err) {
            console.error(err);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ success : false, msg : 'Oops, Something went wrong!' });
        }
    }

}


export {Transactionn};
// module.exports = Transactionn;