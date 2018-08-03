import React, { Component } from 'react';

class Filters extends Component {
  constructor(props){
    super(props);
    this.state={
      
    };
  };
  render() {
    return (
      <div>
        <div>Filter</div>
        <div><input type="checkbox"/>First Name</div>
        <div><input type="checkbox"/>Last Name</div>
        <div><input type="checkbox"/>Country</div>
        <div><input type="checkbox"/>School</div>
      </div>
    );
  }
}

export default Filters;
