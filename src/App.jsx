import './app.css'
import { useState } from 'react'
import { initialTodos } from './initialTodos'
import { MdDelete } from'react-icons/md'

function App() {
  const ENTER_KEY = 13
  const ESCAPE_KEY = 27 

  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])


/**
 * The handleDeleteTask function filters the todos array to remove the itemToDelete and updates the
 * state with the new array.
 */
  function handleDeleteTask(itemToDelete) {
    setTodos(todos.filter(item => item !== itemToDelete))
  }

/**
 * The submit function adds a new todo item to the todos array with a unique id, title, and checked
 * status, and then resets the input value to an empty string.
 */
  function submit(){
    setTodos([...todos, {id:new Date().getTime(), title: value, checked: false}])
    setValue('')
  }

/**
 *A função verifica se a tecla pressionada é a tecla Enter e se o valor de entrada não está vazio, ela
 *alerta o valor; caso contrário, se a tecla pressionada for a tecla Escape, o valor de entrada será limpo.
 */
  function onKeyDown(event){
    if(event.which === ENTER_KEY && value.length > 0){
      submit()
    }else if(event.which === ESCAPE_KEY){
      setValue('')
    }
  }

  function handleCheckedTask(todo){
    todos.map((item) => {
      item.id === todo.id ? {...item, checked: true} : item}
    )
  }

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">todo</h1>
      </header>
      <section className="main">
        <input 
          type="text" 
          className="new-todo"
          placeholder='O que precisa ser feito?'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
        />



        <ul className='todo-list'>
          {
            todos.map((todo) => (
              <li key={todo.id}>
                <span
                  className='todo ' 
                  onClick={() => handleCheckedTask(todo)}
                  role='button'
                  onKeyPress={() => handleCheckedTask(todo)}
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