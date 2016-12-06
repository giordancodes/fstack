import React from 'react';

const Rename = (props) =>{
	return(
		<section id="renameProjects">
		  <div>
		    <form onSubmit={ props.onRenameConfirm }>
		      <label  htmlFor="rename-input"
		              onClick={ props.showRename }
		              >change</label> 
		      { props.rename ?
		          <input  type="text"
		                  id="rename-input"
		                  className="liveText"
		                  placeholder={ props.originalName }
		                  onChange={ props.updateProjects } /> 
		      : null 
		      }
		      <label  htmlFor="rename-input"
		              onClick={ props.showRename }
		              >name?</label>
		    </form>
		  </div>
		  { props.rename ?
		    <div>
		      <button onClick={ props.onRenameConfirm }
		              className="secondary"
		              id="renameProjectsButton" >
		        <code>confirm</code>
		      </button>
		      <button onClick={ props.renameCancel }
		              className="secondary"
		              id="cancelRenameProjectsButton" >
		        <code>cancel</code>
		      </button>
		    </div> 
		    : null
		  }
		</section>
	)
}

export default Rename;