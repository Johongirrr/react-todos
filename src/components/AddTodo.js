import React, { Component } from 'react'
import uuid from 'uuid'
import '../css/AddTodo.css'

class AddTodo extends Component {
  state = {
  		id: '',
  		text: '',
  		completed: 0
  }
  handleChange = (e)=>{
  	 
      this.setState({
        [e.target.name]: e.target.value,
        id: uuid.v4(),
        completed: false
     })
  }

  handleSubmit = (e)=>{
  	e.preventDefault()
  	this.setState({
  		text: ''
  	})
  	 this.props.updateTodos(this.state)
  }

render(){

	return(
			<div className="container">

					<form onSubmit = {this.handleSubmit}>
						<input type="text" id="add-todo" placeholder="Add todos.." value={this.state.text} name="text" onChange={this.handleChange}/>
						<button>Add todo</button>
            
					</form>
			</div>
		)
}
}

export default AddTodo