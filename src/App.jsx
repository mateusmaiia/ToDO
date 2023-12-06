import './app.css'
import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')


  const ENTER_KEY = 13
  const ESCAPE_KEY = 27
/**
  A função verifica se a tecla pressionada é a tecla Enter e se o valor de entrada não está vazio, ela
 *alerta o valor; caso contrário, se a tecla pressionada for a tecla Escape, o valor de entrada será limpo.
 */
  function onKeyDown(event){
    if(event.which === ENTER_KEY && value.length > 0){
      alert(value)
      setValue('')
    }else if(event.which === ESCAPE_KEY){
      setValue('')
    }
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
      </section>
    </section>
  )
}

export default App
