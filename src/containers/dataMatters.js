import React, { Component } from 'react';
// import Data from '../courses.json';
import { connect } from 'react-redux';

class dataMatters extends Component { 
  constructor(props){
    super(props)
    this.state = {myData: null}  
  }
  
  componentDidMount(){
    this.setState({myData: Data})
    // console.log(batata);
    // console.log(batata[0]);
  }

  componentDidUpdate() {
    console.log(this.state.myData)
  }

  render() {
    if (this.state.myData !== null) { 
      return (
        <main className="conteiner-fluid bg-danger main-style">
          {this.state.myData.map(n => <p key={n.id}> {n.name} </p>)}
          {/* {this.state.myData.filter(n => 
            if (n.highlight = true){
              <h1 key={n.id}> {n.name} </h1>
            })} */}
        </main>
      )
    } else {
      return (
        <div>oi</div>
      )
    }
  }
}

const mapStateToProps= (state) => {
  
}
// função para mapear os states

export default connect()(dataMatters);

