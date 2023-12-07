import React, { useState } from 'react'

export function Input({}) {
    const [value, setValue] = useState('')
    const ENTER_KEY = 13
    const ESCAPE_KEY = 27 

    function onKeyDown(event){
        if(event.which === ENTER_KEY && value.length > 0){
            submit()
        }else if(event.which === ESCAPE_KEY){
            setValue('')
        }
    }

    function submit(){
        onNewTodo(value)
    }

    // function submit(){
    //     setTodos([...todos, {id:uuid, title: value, checked: false}])
    //     setValue('')
    // }
    
    return (
      <input
        type="text" 
        className="new-todo"
        placeholder="O que precisa ser feito?"
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyDown={onKeyDown}
        />
    )
}

// Input.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//     onKeyDown: PropTypes.func.isRequired,
// }



