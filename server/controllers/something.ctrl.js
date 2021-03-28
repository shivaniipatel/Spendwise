

class Something {

    static async getHello(req, res) {
        try {
            
            return res.status(HttpStatus.OK).send({ success : true, msg : 'Hello Shivani'});

        } catch (err) {
            console.error(err);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ success : false, msg : 'Oops, Something went wrong!' });
        }
    }

}

module.exports = Something;