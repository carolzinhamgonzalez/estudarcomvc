import React, { Component } from 'react';
import './Matters.css';
import { connect } from 'react-redux';

class Matter extends Component { 

  render() {
    console.log(this.props.base[0]);
    
    return (
      <main className="conteiner-fluid bg-danger main-style">
        {this.props.base[0].map(n => <p key={n.id}> {n.name} </p>)}
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

