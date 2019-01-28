import React, { Component } from 'react';
// import Data from '../courses.json';
import './Matters.css';
import { connect } from 'react-redux';

class Matter extends Component { 
  // constructor(props){
  //   super(props)
  //   this.state = {myData: null}  
  // }
  
  // componentDidMount(){
  //   this.setState({myData: Data})
  //   // console.log(batata);
  //   // console.log(batata[0]);
  // }

  // componentDidUpdate() {
  //   // console.log(this.state.myData)
  // }

  render() {
    console.log(this.props);
    const { data } = this.props;
    return (
      <main className="conteiner-fluid bg-danger main-style">
        {data.map(n => <p key={n.id}> {n.name} </p>)}
      </main>
    )
  }
}
          
        

  //   if (this.state.myData !== null) { 
  //     return (
  //       <main className="conteiner-fluid bg-danger main-style">
  //         {this.state.myData.map(n => <p key={n.id}> {n.name} </p>)}
  //         {/* {this.state.myData.filter(n => 
  //           if (n.highlight = true){
  //             <h1 key={n.id}> {n.name} </h1>
  //           })} */}
  //       </main>
  //     )
  //   } else {
  //     return (
  //       <div>oi</div>
  //     )
  //   }


const mapStateToProps = state => {
  return {
    base: state.base
  }
}
// função para mapear os states



export default connect (mapStateToProps)(Matter);

