import React from 'react';
import style from './TodoList.css';

const Item = props => (
    <li onClick={() => this.remove(props.id)} key={props.id}><span>{props.id}</span>{props.text}</li>
)

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
                    {this.state.data.map(task => {
                        <Item id={task.id} text={task.text}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default TodoList;


//


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


///



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            title: 'ToDoApp'
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
            <div className={style.TodoApp}>
                <Title title={this.state.title}/>
                <TodoList />
            </div>
        )
    }
}