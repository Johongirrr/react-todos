import React from 'react'
import {NavLink} from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = ()=>{

	return (
			<nav>
				<ul>
					<li><NavLink to='/'>All</NavLink></li>
 					<li><NavLink to='/completed'>Completed</NavLink></li>
 					<li><NavLink to='/removed'>RemoveAll</NavLink></li>
				</ul>
			</nav>
		)

}

export default Navbar