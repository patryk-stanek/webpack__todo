import React from 'react';

const Todo = props => (
    <div>
        <span onClick={() => props.remove(props.id)}>╳</span>
        <li key={props.id}>{props.text}</li>
    </div>
)

export default Todo;