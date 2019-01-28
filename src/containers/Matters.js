import React, { Component } from 'react';
import './Matters.css';
import { connect } from 'react-redux';

// let arr = this.props.base[0];

class Matter extends Component { 
  render() {
  
    
    // console.log(arr);
    
    return (
      <main className="conteiner-fluid bg-danger main-style">
        {/* {this.props.base[0].map(n => <p key={n.id}> {n.name} </p>)} */}
        {this.props.base[0].map(n => 
          n.generic === true ? <p key={n.id}> {n.name} </p>
          : <h1 key={n.id}> {n.name} </h1>
        )}
      </main>
    )
  }
}

class GenericMatter extends Component { 
  render() {    
    return (
      <main className="conteiner-fluid bg-danger main-style">
        {this.props.base[0].map(n => 
          n.generic === true ? <p key={n.id}> {n.name} </p>
          : console.log(n.name)
        )}
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    base: state.base
  }
}
// função para mapear os states



export default connect (mapStateToProps)(Matter);

