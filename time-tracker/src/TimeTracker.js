import React, { Component } from 'react';
import firebase from 'firebase';
import { browserHistory, Link } from 'react-router';

// import { toHHMMSS } from '../helpers';
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
      useTimer: false,
      projectsName: ''
    }
  }
  render() {
    if(!this.state.loggedIn){
      browserHistory.push('/login');
    }
    return (
      <div>
        <nav className="home">
          <Link to='/profile'>profile</Link>
          <Link to='/'>projects</Link>
          <Link to='/login' onClick={ this.logout }>sign out</Link>
        </nav>
        <div className="home wrapper">
          <header>
            <p>Hello, { this.state.currentUser }. </p>
            <img src={ this.state.userImage } role="presentation" />
          </header>

          { React.cloneElement(this.props.children, 
            { renameConfirm: this.renameConfirm,
              projectsName: this.state.projectsName,
              projects: this.state.projects,
              currentUser: this.state.currentUser,
              loggedIn: this.state.loggedIn,
              userID: this.state.userID,
              userEmail: this.state.userEmail,
              userImage: this.state.userImage,
              reloadUser: this.reloadUser,
              toHHMMSS: this.toHHMMSS,
              newProject: this.newProject,
              deleteProject: this.deleteProject,
              updateTime: this.updateTime,
              useTimer: this.state.useTimer,
              startTimer: this.startTimer,
              stopTimer: this.stopTimer,
              stopAndSaveTimer: this.stopAndSaveTimer,
              elapsed: this.state.elapsed,
              setCurrentProjectTimeAndTitle: this.setCurrentProjectTimeAndTitle,
              currentProjectTime: this.state.currentProjectTime,
              currentProjectTitle: this.state.currentProjectTitle,
              currentProject: this.state.currentProject,
              deleteUser: this.deleteUser,
              firebaseRef: this.firebaseRef })}

          <footer>
            © 2017 <a href="http://giordan.ca">Giordan Battaglin</a>
          </footer>
        </div>
      </div>
    );
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({ currentUser: user.displayName, userID: user.uid, userEmail: user.email, userImage: user.photoURL });
      } else {
        browserHistory.push('/login');
      }
    });

    this.firebaseRef = firebase.database().ref("projectList");

    // update state when child added
    this.firebaseRef.on("child_added", (dataSnapshot) =>{
      let userID = this.state.userID;
      let projects = this.state.projects;
      if (dataSnapshot.key === userID){
        projects[dataSnapshot.key] = dataSnapshot.val();
        this.setState({projects: projects[dataSnapshot.key]});
      }
      Object.keys(projects).map((id) =>{
        if (id === userID && (projects[userID]['projectsName']) !== undefined ){
          return this.setState({projectsName: projects[userID]['projectsName']});
        } 
      });
    });

    // update state when child deleted
    this.firebaseRef.on("child_removed", (dataSnapshot) =>{
      let projects = this.state.projects;
      delete projects[dataSnapshot.key];
      this.setState({projects});
    });
    
    // update state when child changes
    this.firebaseRef.on("child_changed", (dataSnapshot) =>{
      let userID = this.state.userID;
      let projects = this.state.projects;
      projects[dataSnapshot.key] = dataSnapshot.val();
      if (dataSnapshot.key === userID){
        this.setState({projects: projects[dataSnapshot.key]});
      }
      Object.keys(projects).map((id) =>{
        if (id === 'projectsName'){
          return this.setState({projectsName: projects[userID]['projectsName']});
        }
      });
    })
  }

  logout = () =>{
    if(confirm("Would you care to sign out?")){
      firebase.auth().signOut();
    }
  }

  onUpdateProjects = (e) =>{
    this.updateProjects(e);
  }

  renameConfirm = (n) =>{
    let userID = this.state.userID;
    this.firebaseRef.child(userID).update({projectsName: n}); 
    this.setState({rename: false, projectsName: n });
  }

  deleteProject = (id) =>{
    let userID = this.state.userID;
    let userRef = this.firebaseRef.child(userID);
    if(confirm("Destroy item?")){
      userRef.child(id).remove();
    }
  }

  setCurrentProjectTimeAndTitle = (x, y, id) =>{
    this.setState({ currentProjectTime: x , currentProjectTitle: y, currentProject: id });
  }

  updateTime = (newTime) =>{
    let url = this.state.currentProject;
    let userID = this.state.userID;
    let userRef = this.firebaseRef.child(userID);
    userRef.child(url).update({ 'time': newTime });
    this.setState({ currentProjectTime: newTime });
  }

  startTimer = () =>{
    let useTimer = this.state.useTimer;
    useTimer = !useTimer;
    this.setState({ start: new Date(), useTimer });
    this.timer = setInterval(this.tick, 50);
  }

  stopTimer = () =>{
    let useTimer = this.state.useTimer;
    useTimer = !useTimer;

    this.setState({ start: new Date(), useTimer })
    clearInterval(this.timer);
  }

  stopAndSaveTimer = () =>{
    let elapsed = Math.floor(this.state.elapsed);
    let currentProjectTime = Math.floor(this.state.currentProjectTime);
    this.updateTime( elapsed + currentProjectTime );

    this.stopTimer();
  }

  tick = () =>{
    this.setState({ elapsed: ((new Date() - this.state.start) /1000).toFixed(1) });
  }

  updateTitle = (newTitle) =>{
    let url = this.state.currentProject;
    this.firebaseRef.child(url).update({ 'title': newTitle });
    this.setState({ currentProjectTitle: newTitle });
  }

  reloadUser = () =>{
    let user = firebase.auth().currentUser;
    this.setState({ currentUser: user.displayName, userID: user.uid, userEmail: user.email, userImage: user.photoURL });
  }

  deleteUser = () =>{
    if(confirm("This CANNOT be undone; are you absolutely, positively sure you want to destroy all the hard work you've done and salt the earth?")){
      alert("nice");
      browserHistory.push('/delete-user');
    }
  }

  toHHMMSS = (totalSeconds) => {
    let hours   = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    let seconds = totalSeconds - (hours * 3600) - (minutes * 60);

    seconds = Math.round(seconds * 100) / 100;

    let result = hours;
    result += ":" + (minutes < 10 ? "0" + minutes : minutes);
    result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
    return result;
  }

}

export default TimeTracker;
