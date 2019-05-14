import React from 'react';
import uuid from 'uuid';
import style from './TodoList.css';

import Todo from './Todo.js';
import TodoForm from './TodoForm.js'

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'Clean room'
                },
                {
                    id: 2,
                    text: 'Wash the dishes'
                },
                {
                    id: 3,
                    text: 'Feed my cat'
                }
            ],
            index: 0,
        };
    }

    remove(id) {
        const index = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: index});
    }

    add(val){
        if (val != '') {
            const todo = {
                id: uuid.v4(),
                text: val,
            };
            const data = [...this.state.data, todo];
            this.setState({data});
        }
    }

    render() {
        return (
            <div>
                <h2>Amount of tasks: {this.state.data.length}</h2>
                <ul className={style.List}>
                    {
                        this.state.data.map((item) => <Todo remove={this.remove.bind(this)}id={item.id} key={item.id} text={item.text} />)
                    }
                </ul>
                <TodoForm add={this.add.bind(this)} />
            </div>
        )
    }
}

export default TodoList;