import React, { Component } from 'react';
import Data from '../courses.json';
// import { connect } from 'react-redux';

class DataMatters extends Component { 
  constructor(props){
    super(props)
    this.state = {myData: null}  
  }
  
  componentDidMount(){
    this.setState({myData: Data})
  }

  componentDidUpdate() {
    console.log(this.state.myData)
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default DataMatters;

