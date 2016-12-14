import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Timer from './Timer';
class Project extends Component {

  constructor(){
    super();
    this.state={
      modifyTime: false,
      form:{
        newTimeMinutes: 0,
        newTimeHours: 0
      }
    }
  }
	
  render(){
    return(
      <section className="single-project">
        <h1>{ this.props.currentProjectTitle }</h1>
        
        <h2>current time logged: { this.props.toHHMMSS(this.props.currentProjectTime) } </h2>
        <div className="modify-time">
          { !this.props.useTimer ? 
              <button className="primary"
                      onClick={ this.props.startTimer } >
                      start time?
              </button> 
              :
              <div className="timer-buttons">
                <button className="primary"
                        onClick={ this.props.stopAndSaveTimer } >
                        stop and save?
                </button> 
                <button className="primary cancel"
                        onClick={ this.props.stopTimer } >
                        revert?
                </button>
              </div>
               }
          { !this.props.useTimer ? 
            <button className="primary"
                    onClick={ this.timeEdit } >
              change time?
            </button>
            : null
          }
        </div>
        { this.state.modifyTime ?
          <div>
            { !this.props.useTimer ?
              <div className="editing-time">
                {/*<input  type="number" 
                                        value={ this.state.newTime }
                                        onChange={ this.newProjectTime }
                                        min='0' /> */}
                <form>
                  <div>
                    <input  type="number" 
                            id="newTimeHours"
                            value={ this.state.newTimeHours }
                            onChange={ this.updateField } /> <br/>
                    <label htmlFor="newTimeHours">adjust hours</label>
                  </div>
                   <div>
                    <input  type="number" 
                            id="newTimeMinutes"
                            value={ this.state.newTimeMinutes }
                            onChange={ this.updateField } /> <br/>
                    <label htmlFor="newTimeMinutes">adjust minutes</label>
                  </div>
                </form>
                <div className="editingButtons"> 
                  <button className="primary finish"
                          onClick={ this.onUpdateTime } >
                    finish?
                  </button>
                  <button className="primary cancel"
                          onClick={ this.cancelTimeEdit } >
                    cancel?
                  </button>
                </div>
              </div>
            : null
          }
          </div>
          : null
        }
        { this.props.useTimer ?  
          <Timer elapsed={ this.props.elapsed } />
          : null
        }
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
    let p = this.props.currentProjectTime;
    m = !m;
    this.setState({modifyTime: m, newTime: p});
  }

  onUpdateTime = () =>{
    let t = this.state.newTime;
    let h = this.state.form.newTimeHours;
    let m = this.state.form.newTimeMinutes;
     
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

  updateField = (e) =>{
    let form = this.state.form;
    form[e.target.id] = e.target.value;
    this.setState({form});
  }

}

export default Project;