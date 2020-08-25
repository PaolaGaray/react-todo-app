import React, { Component } from 'react'
import './TodoItem.css'

export class TodoItem extends Component {
    render() {
        return (
            <div className="todo-list">
                <input 
                    type="checkbox"
                    checked={this.props.item.completed}
                    onChange={() => this.props.handleChange(this.props.item.id)}                />
                <p>{this.props.item.text}</p>
            </div>
        )
    }
}

export default TodoItem