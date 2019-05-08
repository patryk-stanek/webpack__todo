import React from 'react';

class Title extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'ToDoApp',
            amount: 0
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h2>Amount of tasks: {this.state.amount} </h2>
            </div>
        )
    }
}

export default Title;