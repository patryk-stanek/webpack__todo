import React from 'react';
import { hot } from 'react-hot-loader';

import style from './App.css';
import Title from '../components/Title.js'
import TodoList from '../components/TodoList.js'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            title: 'ToDoApp'
        };
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title={this.state.title}/>
                <TodoList />
            </div>
        )
    }
}

export default hot(module)(App);