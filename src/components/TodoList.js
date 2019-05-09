import React from 'react';
import style from './TodoList.css';

const Item = props => (
    <li onClick={() => props.remove(props.id)} key={props.id}><span>{props.id}</span>{props.text}</li>
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
        };
    }

    remove(id) {
        console.log(id);
        const index = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: index});
    }

    render() {
        return (
            <div>
                <ul className={style.List}>
                    {
                        this.state.data.map((item) => <Item remove={this.remove.bind(this)}id={item.id} text={item.text} />)
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList;