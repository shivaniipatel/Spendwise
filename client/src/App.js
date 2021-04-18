
import React from 'react';
import {ToastContainer} from 'react-toastify';
import {notify} from './toast.js';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount : null
        }

        this.add = this.add.bind(this);
    }

    add(e) {
        console.log('add');

        fetch("http://localhost:9001/api/transaction", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body" : JSON.stringify({
                amount : this.state.amount
            })
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if (response.success) {
                notify(response.msg)
            }
        })
        .catch(err => {
            console.error(err);
        })

        e.preventDefault();
    }


    render() {
        return (
            <div>
                <h1>Welcome X </h1>
                <input id="amount" className="form-control" type = "number" onChange={(e) => this.setState({amount: e.target.value})}/>
                <button className="btn btn-primary" onClick={(e) => this.add(e)}>Add Transaction</button>
                <ToastContainer />
            </div>
        )
    }
}


export {App};