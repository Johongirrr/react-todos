import React from 'react'
import '../css/Completed.css'
const Completed = ({todos, revertTodo, history}) =>{

  const completedTodos = todos.filter(todo=>todo.completed === true)
  
 	const newTodo =  completedTodos.map(completed => {
  	
  	return(
  			<div className='completed' key={completed.id}>
  				<p className="completed-todos"  onClick={()=>{revertTodo(completed.id, history)}}>{completed.text}</p>
  			</div>
  		)
  })
  
console.log(newTodo)

return (

 
		<div className='todos-container'>
			<h5 className="todos">{newTodo}</h5>
		</div>
	)
}
export default Completed