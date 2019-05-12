import React from 'react';

const Todo = props => (
    <li key={props.id}>
        <span onClick={() => props.remove(props.id)}>╳</span>
        <p>{props.text}</p>
    </li>
)

export default Todo;