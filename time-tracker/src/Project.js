import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Timer from './Timer';
class Project extends Component {

  constructor(){
    super();
    this.state={
      modifyTime: false
    }
  }
	
  render(){
    return(
      <section className="single-project">
        <h1>{ this.props.currentProjectTitle }</h1>
        <h2>current time logged: { this.props.currentProjectTime } </h2>
        <div className="modify-time">
          <button className="primary"
                  onClick={ this.props.startTimer } >
            start time?
          </button>
          <button className="primary"
                  onClick={ this.timeEdit } >
            change time?
          </button>
        </div>
        { this.state.modifyTime ?
          <div className="editing-time">
            <input  type="number" 
                    value={ this.state.currentProjectTime } />
            <button className="primary finish"
                    onClick={ this.onUpdateTime } >
              finish?
            </button>
            <button className="primary cancel"
                    onClick={ this.timeEdit } >
              cancel?
            </button>
          </div>
          : null
        }
        <Timer />
      </section>
    )
  }

  componentWillMount(){
    if(this.props.currentProjectTitle === undefined){
      browserHistory.push('/');
    }
  }

  timeEdit = () =>{
    let m = this.state.modifyTime;
    m = !m;
    this.setState({modifyTime: m});
    this.props.updateTime(42);
  }

  onUpdateTime = () =>{
    // let t = this.state.newTime;
    // t = e.target.value;
    this.props.updateTime();
    // this.setState({newTime: t});
  }

  onSetCurrentProjectTimeAndTitle = (x, y) =>{
    let b = this.state.propsProjectTime;
    let c = this.state.propsProjectTitle;
    this.props.setCurrentProjectTimeAndTitle(b, c);
  }
}

export default Project;