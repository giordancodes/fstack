import React, { Component } from 'react';

class RenameSingleProject extends Component {

	constructor(){
		super();
		this.state={
			rename: false
		}
	}

	render(){
		return(
			<section id="renameProject">
			  <div>
			    <form onSubmit={ this.props.onRenameConfirm }>
			      <label  htmlFor="rename-input"
			              onClick={ this.props.showRename }
			              >change&nbsp;</label> 
			      { this.props.rename ?
			          <input  type="text"
			                  id="rename-input"
			                  className="liveText"
			                  placeholder={ this.props.currentProjectTitle }
			                  onChange={ this.props.updateProject } /> 
			      : null 
			      }
			      <label  htmlFor="rename-input"
			              onClick={ this.props.showRename }
			              >&nbsp;name?</label>
			    </form>
			  </div>
			  { this.props.rename ?
			    <div>
			      <button onClick={ this.props.onRenameConfirm }
			              className="secondary"
			              id="renameProjectsButton" >
			        <code>confirm</code>
			      </button>
			      <button onClick={ this.props.renameCancel }
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
}

export default RenameSingleProject;