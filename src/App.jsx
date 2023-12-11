import './app.css'
import { useState } from 'react'
import { initialTodos } from './initialTodos'
import { MdDelete } from'react-icons/md'
import { TodoList } from './todoList'
import { Input } from './components/Input'

function App() {
  const ENTER_KEY = 13
  const ESCAPE_KEY = 27 

  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])


  // Filtra os elementos do estado/array todo e se o item for diferente do item pressionado ele coloca dentro da nova lista
  function handleDeleteTask(itemToDelete) {
    setTodos(todos.filter(item => item !== itemToDelete))
  }

  function submit(){
      setTodos([...todos, {id:new Date().getTime(), title: value, checked: false}])
      setValue('')
  }

  // Se pressionar a tecla enter dentro do input ativa a função "submit" e adiciona um novo objeto ao estado array todo
  function onKeyDown(event){
    if(event.which === ENTER_KEY && value.length > 0){
      submit()
    }else if(event.which === ESCAPE_KEY){
      setValue('')
    }
  }

  // Essa função mapeia o estado Todo e o objeto que tiver dentro dela possuir o id igual ao clicado vai fazer um toggle na propriedade checked dele
  // e no li tem 
  // className={todo.checked ? "todo checked" : "todo"}  
  function handleCheckedTask(todo){
    setTodos(
      todos.map(item => item.id === todo.id? {...item, checked:!item.checked} : item)
    )
  }

  function onChange(e){
    setValue(e.target.value)
  }

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">todo </h1>
      </header>
      <section className="main">
        <Input 
          value={value} 
          onChange={onChange} 
          onKeyDown={onKeyDown} 
        />
        <TodoList todos={todos}  handleCheckedTask={handleCheckedTask} handleDeleteTask={handleDeleteTask}/>
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