import React from 'react';
import style from './TodoList.css';

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'clean room'
                },
                {
                    id: 2,
                    text: 'wash the dishes'
                },
                {
                    id: 3,
                    text: 'feed my cat'
                }
            ]
        }
        this.remove = this.remove.bind(this);
    }

    remove(id) {
        console.log(id);
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div>
                <ul className={style.List}>
                    {this.state.data.map(task => <li onClick={() => this.remove(task.id)} key={task.id}>{task.text}</li>)}
                </ul>
            </div>
        )
    }
}

export default TodoList;