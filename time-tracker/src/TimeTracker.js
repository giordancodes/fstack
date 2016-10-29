import React, { Component } from 'react';
import firebase from 'firebase';
import { browserHistory, Link } from 'react-router';

import './index.css';
import './App.scss';

class TimeTracker extends Component {
  constructor() {
    super();
    this.state={
      projectsName: "Projects",
      loggedIn: true,
      currentUser: null
    }
  }
  render() {
    if(!this.state.loggedIn){
      browserHistory.push('/login');
    }
    return (
      <div className="home wrapper">
        <header>
          <Link to='/'>projects</Link>
          <Link to='/login' onClick={ this.logout }>sign out</Link>
        </header>
        { React.cloneElement(this.props.children, { projectsName: this.state.projectsName,
          updateProjects: this.updateProjects })}
      </div>
    );
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user){
        this.setState({ loggedIn:true, currentUser: user.displayName })
      } else {
        browserHistory.push('/login');
      }
    })
  }

  updateProjects = (e) =>{
    let n = this.props.projectsName;
    n = e.target.value;
    this.setState({projectsName: n})
  }

  onUpdateProjects = (e) =>{
    this.updateProjects(e);
  }

  logout = () =>{
    firebase.auth().signOut();
    this.setState({loggedIn: false})
  }

}

export default TimeTracker;
