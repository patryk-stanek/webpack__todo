import React from 'react';
import uuid from 'uuid';
import { hot } from 'react-hot-loader';

import style from './App.css';
import Title from '../components/Title.js'
import TodoList from '../components/TodoList.js'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            title: 'ToDoApp',
            amount: 0
        };
    }

    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id){
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div>
                <div className={style.TodoApp}>
                    <Title title={this.state.title} amount={this.state.amount}/>
                    <TodoList />
                </div>
            </div>
        )
    }
}

export default hot(module)(App);