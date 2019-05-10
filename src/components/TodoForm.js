import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.enter = this.enter.bind(this);
    }

    enter(ev) {
        if (ev.keyCode === 13) {
            return this.props.add(ev.target.value);
        }
    }

    render() {
        return (
            <div>
                <input
                    className={style.Form}
                    type='text'
                    onKeyUp={this.enter}
                    placeholder='Name new task and press enter'
                />
            </div>
        )
    }
}

export default TodoForm;