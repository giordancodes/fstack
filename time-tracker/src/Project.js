import React, { Component } from 'react';
import firebase from 'firebase';
class Project extends Component {

  constructor(){
    super();
    this.state={
      modifyTime: false
    }
  }
	
  render(){
    let p = this.props.projectUrl;
    let items = this.props.projects;
    // console.log(p, items, items[p]);
    return(
      <section className="single-project">
        <h1>{ this.state.currentProjectTitle }</h1>
        <h2>current time logged: { this.state.currentProjectTime } </h2>
        <div className="modify-time">
          <button className="primary">
            start time?
          </button>
          <button className="primary"
                  onClick={ this.timeEdit } >
            change time?
          </button>
        </div>
        {/* (this.state.modifyTime){
          return(
            <div className="">
              <button>
                finish?
              </button>
            </div>
          )
          }
        */}
      </section>
    )
  }

  componentWillMount(){
    this.setState({currentUrl: window.location.pathname.split('/')[2]}, 
      () => {
        let c = this.state.currentUrl;
        let items = this.props.projects;
        this.props.singleProjectUrl(c);
      }
    );
  }
  componentWillReceiveProps() {
    let p = this.props.projectUrl;
    let items = this.props.projects;
    if (items[p] !== undefined){
      this.setState({ currentProjectTitle: items[p]['title'], currentProjectTime: items[p]['time'] })
    }
  }

  timeEdit = () =>{
    this.setState({modifyTime: true})
  }

  onUpdateTime = (e) =>{
    let t = this.state.newTime;
    t = e.target.value;
    this.props.updateTime(t);
    this.setState({newTime: t});
  }

}

export default Project;