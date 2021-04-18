
import React from 'react';


function Transactionn() {
    return (
        <div>
            <h1>Welcome X </h1>
            <input type = "number"/>
            <button>Add Transaction</button>
        </div>
    )
}


class App extends React.Component {
    render() {
        return <Transactionn/>;
    }
}


export {App};