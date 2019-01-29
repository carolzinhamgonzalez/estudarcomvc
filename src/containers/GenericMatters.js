import React, { Component } from 'react';
import './Matters.css';
import { connect } from 'react-redux';

class GenericMatters extends Component { 
  render() {
    return (   
      <div className="container offset-2">
        <h3> Disciplinas Gerais </h3>
        <div className="row">
          {this.props.base[0].map(n => n.generic === true ? 
              <div className="col-sm-3 size border b-generic m-1 pt-2 d-flex justify-content-center flex-row">
                <div className="d-flex align-self-center">  
                  <p className="p-generic font-weight-bold img-generic" key={n.id} > 
                    {n.name} 
                  </p>
                </div>  
              </div>
            : <div> </div> 
          )}              
        </div>
      </div> 
    )
  }
}

const mapStateToProps = state => {
  return {
    base: state.base
  }
}
// função para mapear os states

export default connect (mapStateToProps)(GenericMatters);

