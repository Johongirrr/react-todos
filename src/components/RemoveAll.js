import React from 'react'


const RemoveAll = ({todos})=>{

	while(todos.length > 0){
		todos.pop()
	}	

	return <p className="removed-todos">All of the todos are removed</p>
		 
}
export default RemoveAll