import React from 'react'
import './App.css'
import todosData from './todosData'
import TodoItem from './components/TodoItem'

export default class App extends React.Component {

  state = {
    todos: todosData
  }

  handleChange = (id) => {
    this.setState((state) => {
        const updatedTodos = state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        return {
            todos: updatedTodos
        }
    })
}

  render(){
    const todoItems = this.state.todos.map(item => 
      <TodoItem
        key={item.id}
        item={item} 
        handleChange={this.handleChange}
        />)
    return (
          <div>
              {todoItems}
          </div>
    )
  }
}