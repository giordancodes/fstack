import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import RenameSingleProject from './RenameSingleProject';
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
        
        <RenameSingleProject  showRename={ this.showRename }
                              originalName={ this.state.originalName }
                              updateProject={ this.updateProject }
                              onRenameSingleConfirm={ this.onRenameSingleConfirm }
                              renameConfirm={ this.props.renameConfirm }
                              rename={ this.state.rename }
                              renameCancel={ this.renameCancel } />

        
        <h2>current time: <span>{ this.props.toHHMMSS(this.props.currentProjectTime) } </span></h2>
        { this.props.useTimer ?  
          <Timer elapsed={ this.props.elapsed } />
          : null
        }
        { this.state.modifyTime ?
          <div>
            { !this.props.useTimer ?
              <div className="editing-time">
                <form onSubmit={ this.onUpdateTime }>
                  <div className="labeled-input">
                    <input  type="number" 
                            id="newTimeHours"
                            value={ this.state.newTimeHours }
                            onChange={ this.updateField } /> 
                    <label htmlFor="newTimeHours">add/subtract hours</label>
                  </div>
                   <div className="labeled-input">
                    <input  type="number" 
                            id="newTimeMinutes"
                            value={ this.state.newTimeMinutes }
                            onChange={ this.updateField } /> 
                    <label htmlFor="newTimeMinutes">add/subtract minutes</label>
                  </div>
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
                </form>
              </div>
            : null
          }
          </div>
          : null
        }
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
      </section>
    )
  }

  componentWillMount(){
    if(this.props.currentProjectTitle === undefined){
      browserHistory.push('/');
    }
  }

  componentDidMount(){
    this.props.reloadUser();
    let newTime = this.props.currentProjectTime;
    this.setState({ newTime });
  }

  timeEdit = () =>{
    let m = this.state.modifyTime;
    let p = this.props.currentProjectTime;
    m = !m;
    this.setState({modifyTime: m, newTime: p});
  }
  
  cancelTimeEdit = () =>{
    let newTime = this.state.newTime;
    let currentTime = this.props.currentProjectTime;
    this.setState({ newTime: currentTime });
    // this.timeEdit();
  }

  onUpdateTime = (e) =>{
    e.preventDefault();
    
    let t = this.state.newTime;
    let h = this.state.form.newTimeHours;
    let m = this.state.form.newTimeMinutes;

    let result = t + (h * 3600) + (m * 60);

    this.props.updateTime(result);
    this.timeEdit();
  }

  showRename = () =>{
    this.setState({rename: true})
  }

  updateProject = (e) =>{
    let n = this.state.newName;
    n = e.target.value;
    this.setState({newName: n});
  }

  onRenameSingleConfirm = (e) =>{
    e.preventDefault();
    let n = this.state.newName;
    let id = this.props.currentProject;
    if (n === undefined){
      alert("Nothing entered. Please try again.");
    } else if (n.replace(/\s+/g, '') === ""){
       alert("That is not sufficient; please try again.")
    } else {
      this.props.renameSingleProject(n, id);

      this.setState({rename: false, newName: '', originalName: n});
    }
  }

  renameCancel = () =>{
    this.setState({rename: false, newName: ''});
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