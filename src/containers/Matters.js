import React, { Component } from 'react';
// import Data from '../courses.json';
import './Matters.css';
import { connect } from 'react-redux';

class Matter extends Component { 

  render() {
    console.log(this.props.base);
    const { data } = this.props;
    
    return (
      <main className="conteiner-fluid bg-danger main-style">
        {this.props.base.map(n => <p key={n.id}> {n.name} </p>)}
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

