import React, { Component } from 'react';
import './Matters.css';
import { connect } from 'react-redux';

// filtro e style das disciplinas personalizadas
class HighlightMatters extends Component { 
  render() {
    return (   
      <div className="container offset-2">
        <h3> Disciplinas Personalizadas </h3>          
        <div className="row d-flex">
          {this.props.base[0].map(n => n.highlight === true ? 
              <div className="col-sm-3 size border b-highlight m-1 pt-2 d-flex justify-content-center">
                <p className="p-highlight font-weight-bold" key={n.id} > 
                  {n.name} 
                </p>
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

export default connect (mapStateToProps)(HighlightMatters);

