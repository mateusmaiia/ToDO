import './app.css'
import { useState } from 'react'
import { Input } from './components/input'
import { initialTodos } from './initialTodos'
import { MdDelete } from'react-icons/md'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const uuid = uuidv4()

  const [todos, setTodos] = useState([])

  function handleDeleteTask(todo) {
    setTodos(todos.filter(item => item !== todo))
  }

  function onNewTodo(value){
      setTodos([...todos, {id:uuid, title: value, checked: false}])
      setValue('')
  }

  function handleCheckedTask(todo){
    const newTodos = todos.map((obj) => (
      ( obj.id === todo.id ? {...obj, checked: !obj.checked} : obj)
    ))

    setTodos(newTodos)
  }

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">todo</h1>
      </header>
      <section className="main">
        <Input
          onNewTodo={onNewTodo}
        />

        <ul className='todo-list'>
          {
            todos.map((todo) => (
              <li key={todo.id}>
                <span
                  className={todo.checked? 'todo checked' : 'todo'}
                  onClick={() => handleCheckedTask(todo)}
                  role='button'
                >
                  {todo.title}
                </span>

                <button type='button' onClick={() => handleDeleteTask(todo)}>
                  <MdDelete className='delete-button' size={28}/>
                </button>
              </li>
            ))
          }
        </ul>
      </section>
    </section>
  )
}

export default App





        {/* {todos.map((todo) => (
          <div key={todo.id} className="view">
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={(e) => {
                setTodos(todos.map((t) => (t.id === todo.id? {...t, checked: e.target.checked } : t)))
              }}
            />
            <label>{todo.title}</label>
            <button className="destroy" onClick={() => setTodos(todos.filter((t) => t.id!== todo.id))}>x</button>
          </div>
            ))} */}