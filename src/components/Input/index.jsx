

export function Input({value, onKeyDown, onChange}){
    return(
      <input 
        type="text"
        className="new-todo"
        placeholder='O que precisa ser feito?'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />      
    )
  
}