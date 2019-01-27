import React, { Component } from 'react';
import Data from '../courses.json';

class Matter extends Component { 
  componentDidMount(){
    let batata = Data;
    console.log(batata);
    console.log(batata[0]);
  }
  
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Matter;





