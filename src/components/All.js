import React, { Component } from 'react'
import '../css/All.css'
class All extends Component {

   
	 
 render(){
 	   
  const todosList = this.props.todos.length ? (
  		this.props.todos.map(todo=>{
  			return(
  				<div className="todos" key={todo.id}>
          
  					<p className="todos-item" onClick={()=>{this.props.deleteTodo(todo.id, this.props) 
              }}>{todo.text}</p>
  				</div>

  				)
  		})
  	) : (
  		<div className ="container">You have no todos left</div>
  	)
return (
 
		<div className='container'>
			{todosList}
		</div>

	)
	
}
}


export default All