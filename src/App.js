import React, { Component } from 'react';
import {students} from './student.json';
import Students from './Students';
import filterBasedKey from './utils/filterUniqueColumnValues';

const firstObj = filterBasedKey(students, 'firstname');
const lastObj = filterBasedKey(students, 'lastname');
const stateobj1 = {}
for(let key in firstObj){
  stateobj1[firstObj[key]] = {
    check: false
  }
}; 
const stateobj2 = {}; 
for(let key in lastObj){
  stateobj2[lastObj[key]] = {
    check: false
  }
}; 

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      stateobj1, stateobj2
    }
  };

  renderFirstNameInputFields= ()=>{
    const {stateobj1} = this.state;
    let objvals=[];
    for(let i in stateobj1){
      objvals.push(stateobj1[i]['check'])
    };
    if(objvals.includes(true)){
      return Object
              .keys(stateobj1)
              .map((item)=>{
                if(stateobj1[item]['check']){
                  return(
                    <div key={item}>
                        <input type="checkbox" id={item} value={stateobj1[item]['check']} onChange={this.handleToggleFirstName} /><span>{item}</span>
                    </div>
                  );
                }else{
                  return(
                    <div key={item}>
                        <input type="checkbox" id={item} value={stateobj1[item]['check']} onChange={this.handleToggleFirstName} disabled/><span>{item}</span>
                    </div>
                  );
                }
              }); 
    }else{
      return Object
              .keys(stateobj1).map((item, i)=>{
                return(
                  <div key={item}>
                      <input type="checkbox" id={item} value={stateobj1[item]['check']} onChange={this.handleToggleFirstName} /><span>{item}</span>
                  </div>
                );
              });
    };
  };

  handleToggleFirstName = (event)=>{
    const key = event.target.id;
    const {stateobj1} = this.state;
    this.setState((prevState, props)=>{
      const prev = prevState.stateobj1[key]['check']; 
      const current = !prevState.stateobj1[key]['check']; 
      stateobj1[key]['check'] = current;
      return {stateobj1}
   })
  };

  handleToggleLastName = (event)=>{
    const key = event.target.id;
    const {stateobj2} = this.state;
    this.setState((prevState, props)=>{
      const prev = prevState.stateobj2[key]['check']; 
      const current = !prevState.stateobj2[key]['check']; 
      stateobj2[key]['check'] = current;
      return {stateobj2}
   })
  };

  renderLastNameInputFields = ()=>{
    const {stateobj2} = this.state;
    let objvals=[];
    for(let i in stateobj2){
      objvals.push(stateobj2[i]['check'])
    };
    if(objvals.includes(true)){
      return Object
              .keys(stateobj2)
              .map((item)=>{
                if(stateobj2[item]['check']){
                  return(
                    <div key={item}>
                        <input type="checkbox" id={item} value={stateobj2[item]['check']} onChange={this.handleToggleLastName} /><span>{item}</span>
                    </div>
                  );
                }else{
                  return(
                    <div key={item}>
                        <input type="checkbox" id={item} value={stateobj2[item]['check']} onChange={this.handleToggleLastName} disabled/><span>{item}</span>
                    </div>
                  );
                }
              }); 
    }else{
      return Object
              .keys(stateobj2)
              .map((item, i)=>{
                return(
                  <div key={item}>
                      <input type="checkbox" id={item} value={stateobj2[item]['check']} onChange={this.handleToggleLastName} /><span>{item}</span>
                  </div>
                );
              });
    };
  };

  render() {
    return (
      <div>
        <div>First Name:
        {
          this.renderFirstNameInputFields()
        }
        </div>
        <hr />
        <div>Last Name:
          {
            this.renderLastNameInputFields()
          }
        </div>
        <hr />
        <Students students={students} filters={this.state} />
      </div>
    );
  }
};

export default App;
