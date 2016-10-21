import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class HeaderTop extends React.Component {
	
	render(){
		return(
			<nav>
				<ul>
					<li>
						<button>All</button>
					</li>
					<li>
						<button>Checked</button>
					</li>
					<li>
						<button>Unchecked</button>
					</li>
				</ul>
				<header><h1>{ this.props.todos.length }</h1></header>
			</nav>
		)
	}
}

export default HeaderTop;