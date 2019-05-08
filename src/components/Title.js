import React from 'react';

class Title extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'ToDoApp'
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h2>Task list:</h2>
                <ul>
                    <li>Task 1</li>
                    <li>Task 2</li>
                </ul>
            </div>
        )
    }
}

export default Title;