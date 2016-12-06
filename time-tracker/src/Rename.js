import React, { Component } from 'react';

class Rename extends Component {

	constructor(){
		super();
		this.state={
			rename: false
		}
	}

	render(){
		return(
			<section id="renameProjects">
			  <div>
			    <form onSubmit={ this.props.onRenameConfirm }>
			      <label  htmlFor="rename-input"
			              onClick={ this.props.showRename }
			              >change</label> 
			      { this.props.rename ?
			          <input  type="text"
			                  id="rename-input"
			                  className="liveText"
			                  placeholder={ this.props.originalName }
			                  onChange={ this.props.updateProjects } /> 
			      : null 
			      }
			      <label  htmlFor="rename-input"
			              onClick={ this.props.showRename }
			              >name?</label>
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

export default Rename;