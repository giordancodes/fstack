import React from 'react';

const IndividualProject = (props) => <div>
  { Object.keys(props.projects).map((id, val) => {
	  	let item = props.projects[id];
	  	if (id !== 'projectsName'){
	      return(
	        <div key={ id } >
	          <li>
	            <div>
	            	<span>
	                <a onClick={ () => props.chooseProject(id) } >{ item.title }</a>
	              </span>
	            </div>
	            <div>
	            	<span>{ item.time }</span>
	            	<button className="delete"
	            					onClick={ () => props.onDeleteProject(id) }
	            	>delete?</button>
	            </div>
	          </li>
	        </div>
	      )
	  	}
	  })}
	</div>;

export default IndividualProject;