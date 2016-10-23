import React from 'react';
import { Link } from 'react-router';

class HeaderTop extends React.Component {
	
	render(){
		return(
			<nav>
				<header><h1>{ this.props.todos.length }</h1></header>
				Filter: { this.props.params.filter}
				(
					<Link to="/">All</Link> |
					<Link to="/checked">Checked</Link> |
					<Link to="/unchecked">Unchecked</Link>
				)
			</nav>
		)
	}
}

export default HeaderTop;