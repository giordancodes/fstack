import React from 'react';
import { Link } from 'react-router';

class HeaderTop extends React.Component {
	
	render(){
		return(
			<nav>
				<ul>
					<li>
						<Link to="/">All</Link>
					</li>
					<li>
						<Link to="/checked">Checked</Link>
					</li>
					<li>
						<Link to="/unchecked">Unchecked</Link>
					</li>
				</ul>
				<header><h1>{ this.props.todos.length }</h1></header>
			</nav>
		)
	}
}

export default HeaderTop;