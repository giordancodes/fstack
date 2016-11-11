import React, { Component } from 'react';
import firebase from 'firebase';

import './App.scss';
import './index.css';

class ProjectsList extends Component {
  constructor() {
    super();
    this.state={
      rename: false,
      newProjectName: ''
    }
  }
  render() {
    let items = this.props.projects;

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
                        onChange={ this.newProjectNameUpdate }
                        value={ this.state.newProjectName } 
                          />
                <button className="primary"
                        onSubmit={ this.newProject }
                >add new</button>
              </form>
            </li>
            { items.map((item, i) => {
                return(
                  <div key={ i } >
                    <li>
                      <p><a href=""> { item.title } </a></p>
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
    this.firebaseRef = firebase.database().ref("projects");
    let p = this.props.projectsName;

    this.firebaseRef.on("child_added", (dataSnapshot) =>{
      
      let projects = this.state.projects;
      projects[dataSnapshot.key] = dataSnapshot.val();

      this.setState({projects});
    });

    this.firebaseRef.on("child_removed", (dataSnapshot) =>{
      
      let projects = this.state.projects;
      delete projects[dataSnapshot.key];

      this.setState({projects});
    });


    this.setState({originalName: p});
    // console.log(this.firebaseRef);
    // this.firebaseRef.push({p})
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

  newProjectNameUpdate = (e) =>{
    let newProjectName = this.state.newProjectName;
    newProjectName = e.target.value;
    this.setState({newProjectName});
  }

  newProject = (e) =>{
    e.preventDefault();

    let projects = this.props.projects;
    let newProject = {
      title: this.state.newProjectName,
      time: 0
    }

    if (this.state.newProjectName !== ''){
      this.props.projects.push(newProject);
      this.setState({newProjectName: '', projects: projects})
    }

  }

}

export default ProjectsList;
