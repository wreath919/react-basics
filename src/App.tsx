import React, { useState } from 'react'
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import { TodoState } from './components/TodosState'

// function App() {
//   return <div className="App"></div>
// }

const App = () => {
  const [todos, setTodos] = useState<TodoState[]>([])
  const todoAddedHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}])
  }
  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
  }
  return (
    <div className="App">
      <NewTodo onAddedTodo={todoAddedHandler}/>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  )
}

export default App
