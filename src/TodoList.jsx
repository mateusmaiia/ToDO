import { MdDelete } from "react-icons/md"

export function TodoList({handleCheckedTask, handleDeleteTask, todos}){
    return (
        <ul className='todo-list'>
        {
          todos.map((todo) => (
            <li key={todo.id}>
              <span
                className={todo.checked ? "todo checked" : "todo"} 
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
    )
}