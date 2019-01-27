import React, { Component } from 'react';
import Data from '../courses.json';

class Matter extends Component { 
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
        <div>
          {this.state.myData.map(x => <p key={x.id}> {x.name} </p>)}
        </div>
      )
    } else {
      return (
        <div>oi</div>
      )
    }
  }
}

export default Matter;

//   componentDidMount(){
//     const objMatters = [];
//     const options = {
//       method: "get",
//       headers: {'Content-Type': 'application/json'}
//     };

//     fetch(Data, options)
//       .then((res) => {
//         if (res.status !== 200) {
//           throw new Error('Request failed');
//         }
//         return res.json();
//       })
//       .then(data => {objMatters.push(data);
//         this.setState({objMatters: objMatters})
//       })
// }


  // componentDidMount(){

  //   var xmlhttp = new XMLHttpRequest()
  //   xmlhttp.onreadystatechange = function () {
  //       console.log(JSON.parse(this.responseText));
  //       // let myData;
  //       // myArr.forEach((infos) => {myData.push(infos)});
  //     }
  //   xmlhttp.open('GET', Data)
  //   xmlhttp.send()

  // }

  // let myData = JSON.parse(Data);
    // this.setState({myData: myData});

    // $(document).ready(function(){  
    //   const objMatters
    //   $ajax({
    //     dataType: "json",
    //     Data,
    //     success: (data => {objMatters.push(data);
    //               this.setState({objMatters: objMatters})
    //             })
    //   });
    // })  

    // var xmlhttp = new XMLHttpRequest()
    // xmlhttp.onreadystatechange = function () {
    //     var myData = JSON.parse(this.responseText)
    //     console.log(myData);
    //   }
    // xmlhttp.open('GET', Data)
    // xmlhttp.send()



