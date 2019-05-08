import React from 'react';

const Title = props => (
    <div>
        <h1>{props.title}</h1>
        <h2>Amount of tasks: {props.amount}</h2>
    </div>
)

export default Title;