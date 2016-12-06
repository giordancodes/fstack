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
                    value={ this.state.newTime }
                    onChange={ this.newProjectTime } />
            <button className="primary finish"
                    onClick={ this.onUpdateTime } >
              finish?
            </button>
            <button className="primary cancel"
                    onClick={ this.cancelTimeEdit } >
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

  componentDidMount(){
    let newTime = this.props.currentProjectTime;
    this.setState({ newTime });
  }

  timeEdit = () =>{
    let m = this.state.modifyTime;
    m = !m;
    this.setState({modifyTime: m});
  }

  onUpdateTime = () =>{
    let t = this.state.newTime;
    this.props.updateTime(t);
    this.timeEdit();
  }

  cancelTimeEdit = () =>{
    let newTime = this.state.newTime;
    newTime = this.props.currentProjectTime;
    this.setState({ newTime });
    this.timeEdit();
  }

  onSetCurrentProjectTimeAndTitle = (x, y) =>{
    let b = this.state.propsProjectTime;
    let c = this.state.propsProjectTitle;
    this.props.setCurrentProjectTimeAndTitle(b, c);
  }

  newProjectTime = (e) =>{
    let newTime = this.state.newTime;
    newTime = e.target.value;
    this.setState({ newTime });
  }

}

export default Project;