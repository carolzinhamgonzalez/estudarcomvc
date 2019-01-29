import React, { Component } from 'react';
import './Matters.css';
import { connect } from 'react-redux';

class DescriptionGeneric extends Component { 
  render() {
    return (   

      <div className="container offset-1">
        <div className="row">
          {this.props.base[0].map(n => n.generic === true ? 
              <div className="col-sm-6 size">
                  <h4 key={n.id}> {n.name}  </h4>
                  <p className="p-generic img-generic" key={n.id} > 
                    {n.description} 
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



export default connect (mapStateToProps)(DescriptionGeneric);

