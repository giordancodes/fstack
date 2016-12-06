import React, { Component } from 'react';
import firebase from 'firebase';
import { browserHistory, Link } from 'react-router';

import './index.css';
import './App.scss';

class TimeTracker extends Component {
  constructor() {
    super();
    this.state={
      loggedIn: true,
      currentUser: null,
      projects: {}
    }
  }
  render() {
    if(!this.state.loggedIn){
      browserHistory.push('/login');
    }
    return (
      <div>
        <nav className="home">
          <Link to='/'>projects</Link>
          <Link to='/login' onClick={ this.logout }>sign out</Link>
        </nav>
        <div className="home wrapper">
          <header>
            <p>Hello, { this.state.currentUser }. </p>
          </header>
          { React.cloneElement(this.props.children, 
            { renameConfirm: this.renameConfirm,
              projectsName: this.state.projectsName,
              projects: this.state.projects,
              currentUser: this.state.currentUser,
              loggedIn: this.state.loggedIn,
              userID: this.state.userID,
              deleteProject: this.deleteProject,
              updateTime: this.updateTime,
              startTimer: this.startTimer,
              setCurrentProjectTimeAndTitle: this.setCurrentProjectTimeAndTitle,
              currentProjectTime: this.state.currentProjectTime,
              currentProjectTitle: this.state.currentProjectTitle,
              currentProject: this.state.currentProject,
              firebaseRef: this.firebaseRef })}
          <footer>© 2016 <a href="http://giordan.ca">Giordan Battaglin</a> </footer>
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.firebaseRef = firebase.database().ref("projectList");

    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({ loggedIn: true, currentUser: user.displayName, userID: user.uid });
      } else {
        browserHistory.push('/login');
      }
    });

    this.firebaseRef.on("child_added", (dataSnapshot) =>{
      let projects = this.state.projects;
      projects[dataSnapshot.key] = dataSnapshot.val();
      // console.log(projects[dataSnapshot.key])
      Object.keys(projects).map((id) =>{
        if (id === 'projectsName'){
          return this.setState({projectsName: projects[id]});
        }
      });
      this.setState({projects});
    });

    this.firebaseRef.on("child_removed", (dataSnapshot) =>{
      let projects = this.state.projects;
      delete projects[dataSnapshot.key];

      this.setState({projects});
    });
  }

  logout = () =>{
    if(confirm("Would you care to sign out?")){
      firebase.auth().signOut();
      this.setState({loggedIn: false});
    }
  }

  onUpdateProjects = (e) =>{
    this.updateProjects(e);
  }

  renameConfirm = (n) =>{
    this.firebaseRef.update({ projectsName: n });
    this.setState({rename: false, projectsName: n });
  }

  deleteProject = (id) =>{
    if(confirm("Destroy item?")){
      this.firebaseRef.child(id).remove();
    }
  }

  updateTime = (e) =>{
    let t = this.state.currentProjectTime;
    let items = this.state.projects;
    let url = this.state.currentProject;
    // t = e.target.value;
    let project = items[url];
    console.log(project);
    this.firebaseRef.update({ project: { 'time': 42 } })
    // this.setState({currentProjectTime: t});
  }

  setCurrentProjectTimeAndTitle = (x, y, id) =>{
    let items = this.state.projects;
    // this.firebaseRef.update({ items[id] })
    this.setState({ currentProjectTime: x , currentProjectTitle: y, currentProject: id });
    console.log(items[id]['title']);
  }

  startTimer = () =>{

  }
}

export default TimeTracker;
