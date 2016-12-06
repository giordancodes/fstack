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
      projects: {},
      elapsed: 0,
      useTimer: false
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
              stopTimer: this.stopTimer,
              stopAndSaveTimer: this.stopAndSaveTimer,
              elapsed: this.state.elapsed,
              useTimer: this.state.useTimer,
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

  setCurrentProjectTimeAndTitle = (x, y, id) =>{
    let items = this.state.projects;
    this.setState({ currentProjectTime: x , currentProjectTitle: y, currentProject: id });
  }

  updateTime = (newTime) =>{
    let projects = this.state.projects;
    let url = this.state.currentProject;
    this.firebaseRef.child(url).update({ 'time': newTime });
    this.setState({ currentProjectTime: newTime });
  }

  startTimer = () =>{
    let useTimer = this.state.useTimer;
    useTimer = !useTimer;
    this.setState({ start: new Date(), useTimer })
    this.timer = setInterval(this.tick, 50);
  }

  stopTimer = () =>{
    let useTimer = this.state.useTimer;
    useTimer = !useTimer;

    let elapsed = this.state.elapsed;

    this.setState({ start: new Date(), useTimer })
    clearInterval(this.timer);
  }

  stopAndSaveTimer = () =>{
    let elapsed = Math.floor(this.state.elapsed);
    let currentProjectTime = Math.floor(this.state.currentProjectTime);
    console.log( elapsed , currentProjectTime );
    this.updateTime( elapsed + currentProjectTime );

    this.stopTimer();
  }

  tick = () =>{
    this.setState({ elapsed: ((new Date() - this.state.start) /1000).toFixed(1) });
  }

  updateTitle = (newTitle) =>{
    let projects = this.state.projects;
    let url = this.state.currentProject;
    this.firebaseRef.child(url).update({ 'title': newTitle });
    this.setState({ currentProjectTitle: newTitle });
  }
}

export default TimeTracker;
