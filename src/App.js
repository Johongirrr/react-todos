import React, { Component } from 'react';
import uuid from 'uuid'
import AddTodo from './components/AddTodo'
import All from './components/All'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Completed from './components/Completed'
import './css/App.css'
import RemoveAll from './components/RemoveAll'
 
 
class App extends Component {
  state = {
    todos: [
    {id: null, text: null, completed: false},
  
    ]
  }

  updateTodos = (todo) =>{
         const todos = [...this.state.todos, todo]
        this.setState({
          todos
        })
      }


  deleteTodo = (id, dir)=>{
  dir.history.push('/completed')
   const completed = this.state.todos.find(todo => todo.id === id)
   if(completed.completed){
    this.setState({
      ...this.state,
      completed
    })

   } else {
   completed.completed = !completed.completed
   console.log(completed.completed)
   }

   
  }
  revertTodo =(id,dir)=>{
    dir.push('/')
    const incomplete = this.state.todos.find(todo => todo.id === id)
    if(incomplete.completed){
      incomplete.completed = !incomplete.completed
      console.log(incomplete.completed)

     }else {

     }

  }
  render() {
     
    return (
      <BrowserRouter>
      <div className="todo-app">
        <h1 className="todo-title">My Todo App</h1>

        <AddTodo updateTodos={this.updateTodos} todos={this.state.todos}/>
         
        <Navbar/>
           <Switch>
            <Route exact path='/'render={(props)=> <All {...props} deleteTodo={this.deleteTodo} todos={this.state.todos}/>}></Route>
            <Route path='/completed' render= {(props)=> <Completed {...props} revertTodo={this.revertTodo} todos={this.state.todos}/>}></Route>
            <Route path='/removed' render={props=> <RemoveAll {...props} todos={this.state.todos}/>}></Route>
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
