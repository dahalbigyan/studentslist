import React, { Component } from 'react';

class Students extends Component {
  constructor(props){
    super(props);
    this.state={
      students: this.props.students, 
      updatedStudents: this.props.students
    };
  };

  // this portion has to be refactored to make it more modular
  componentWillReceiveProps(nextProps){
    const {filters} = nextProps;
    const {stateobj1, stateobj2} = filters;
    let updatedStudents =[]; 
    let firstnameOptionschecked;
    for(let i in stateobj1){
      if(stateobj1[i]['check']===true){
        firstnameOptionschecked=true;
      }
    }; 

    let secondnameOptionschecked;
    for(let i in stateobj2){
      if(stateobj2[i]['check']===true){
        secondnameOptionschecked=true;
      }
    }; 

    if(firstnameOptionschecked && !secondnameOptionschecked){
      Object
          .keys(stateobj1)
          .map((item)=>{
            if(stateobj1[item]['check']){
            updatedStudents = this.state.students.filter((student)=>{
              return student.firstname === item;
            }); 
            this.setState({updatedStudents});
            };
          }); 
    }else if(firstnameOptionschecked && secondnameOptionschecked){
      Object
          .keys(stateobj1)
          .map((item)=>{
              if(stateobj1[item]['check']){
              updatedStudents = this.state.students.filter((student)=>{
                return student.firstname === item;
              }); 
              this.setState({updatedStudents});
              }
            }); 
      Object
          .keys(stateobj2)
          .map((item)=>{
            if(stateobj2[item]['check']){
            let updatedStudents_2 = updatedStudents.filter((student)=>{
              return student.lastname === item;
            }); 
            this.setState({updatedStudents: updatedStudents_2});
            }; 
          }); 
    } else if(!firstnameOptionschecked && secondnameOptionschecked){
      Object
          .keys(stateobj2)
          .map((item)=>{
            if(stateobj2[item]['check']){
            let updatedStudents = this.state.students.filter((student)=>{
              return student.lastname === item;
            }); 
            this.setState({updatedStudents});
            }; 
          }); 
      Object
          .keys(stateobj1)
          .map((item)=>{
            if(stateobj1[item]['check']){
              let updatedStudents_2 = updatedStudents.filter((student)=>{
              return student.firstname === item;
            }); 
            this.setState({updatedStudents: updatedStudents_2});
            }
          }); 
    } else if(!firstnameOptionschecked && !secondnameOptionschecked){
      updatedStudents = this.state.students;
      this.setState({updatedStudents});
    }
  };

  renderStudents = ()=>{
    const studentsList= this.state.updatedStudents.map((student)=>{
      return(
        <tr key={student.id}>
            <td>{student.firstname}</td>
            <td>{student.lastname}</td>
            <td>{student.country}</td>
            <td>{student.school}</td>
        </tr>
      );
    });
    return studentsList;
  };

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Country</th>
            <th>School</th>
          </tr>
          {
            this.renderStudents()
          }
        </tbody>
      </table>
    );
  }
}

export default Students;
