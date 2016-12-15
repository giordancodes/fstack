import React from 'react';

const IndividualProject = (props) => <div>
  { Object.keys(props.projects).map((id) => {
	  	let item = props.projects[id];
	  	if (id !== 'projectsName'){
	      return(
	        <div key={ id } >
	          <li>
	            <div className="project-line">
	            	<span>
	                <a onClick={ () => props.chooseProject(id) } >{ item.title }</a>
	              </span>
	            </div>
	            <div className="project-line">
	            	<span className="time">{ props.toHHMMSS(item.time) }</span>
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