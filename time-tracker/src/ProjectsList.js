import React, { Component } from 'react';
import firebase from 'firebase';

import './App.scss';
import './index.css';

class ProjectsList extends Component {
  constructor() {
    super();
    this.state={
      rename: false,
      projects: [
        {title: 'graveyard shift', time: 42},
        {title: 'some wordpress stuff', time: 420}
      ]
    }
  }
  render() {
    let items = this.state.projects;

    return (
      <div className="projects-list wrapper">
        <h1>{ this.props.projectsName } List</h1>
        <section id="renameProjects">
          <div>
            <form onSubmit={ this.onRenameConfirm }>
              <label  htmlFor="rename-input"
                      onClick={ this.showRename }
                      >change</label> 
              { this.state.rename ?
                  <input  type="text"
                          id="rename-input" 
                          placeholder={ this.state.originalName }
                          onChange={ this.updateProjects } /> 
              : null 
              }
              <label  htmlFor="rename-input"
                      onClick={ this.showRename }
                      >name?</label>
            </form>
          </div>
          { this.state.rename ?
            <div>
              <button onClick={ this.onRenameConfirm }
                      className="secondary"
                      id="renameProjectsButton" >
                <code>confirm</code>
              </button>
              <button onClick={ this.renameCancel }
                      className="secondary"
                      id="cancelRenameProjectsButton" >
                <code>cancel</code>
              </button>
            </div> 
            : null
          }
        </section>
        <section  className="projects" 
                  onSubmit={ this.newProject } >
          <ul>
            <li>
              <form>
                <input  type="text" 
                        placeholder="new item..." 
                        onChange={ this.newProjectName }
                          />
                <button className="primary"
                        onSubmit={ this.newProject }
                >si</button>
              </form>
            </li>
            { items.map((item, i) => {
                return(
                  <div key={ i } >
                    <li>
                      <p>{ item.title }</p>
                      <p>{ item.time }</p>
                    </li>
                  </div>
                )
              }) 
            }
          </ul>
        </section>
      </div>
    );
  }

  componentDidMount(){
    let p = this.props.projectsName;
    this.setState({originalName: p});
    this.firebaseRef = firebase.database().ref("root");
    console.log(this.firebaseRef);
    this.firebaseRef.push({p})
  }

  onUpdateProjects = (e) =>{
    this.updateProjects(e);
  }

  updateProjects = (e) =>{
    let n = this.state.newName;
    n = e.target.value;
    this.setState({newName: n});
  }

  showRename = () =>{
    this.setState({rename: true})
  }

  onRenameConfirm = (e) =>{
    e.preventDefault();
    let n = this.state.newName;
    if (n === undefined){
      alert("You entered nothing. What are you doing?");
    } else if (n.replace(/\s+/g, '') === ""){
       alert("That is not sufficient; think this one over.")
    } else {
      this.props.renameConfirm(n);
      this.setState({rename: false, newName: '', originalName: n});
      this.firebaseRef.push({projectsName: n});
    }
  }
    
  renameCancel = () =>{
    this.setState({rename: false, newName: ''});
  }

  newProjectName = (e) =>{
    let newProjectName = this.state.newProjectName;
    newProjectName = e.target.value;
    this.setState({newProjectName});
  }

  newProject = (e) =>{
    e.preventDefault();
    this.setState({newProjectName: ''})
  }

}

export default ProjectsList;
