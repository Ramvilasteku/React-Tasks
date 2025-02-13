// import React from "react";
// import Child  from "./Child";

// class App extends React.Component{
// render(){
//   const data=[{id:1,m_Name:'Pushpa2',m_Budget:'450CR'},{id:1,m_Name:'Devara',m_Budget:'300CR'},{id:1,m_Name:'Salaar',m_Budget:'270CR'}]

// return(
// <div>
// <h1>Movie Name with Budget</h1>

//   {data.map(x=>{
//     return(
//       <Child m_n={x.m_Name} m_b={x.m_Budget}/>
//     )

//   })}

// </div>

//   )

// }
// }

// export default App


// import React from "react";

// import './App.css'

// class App extends React.Component{

//   constructor(){
//       super()
//       this.state={
//           count:0
//         }
//       }

//       dec=()=>{
//           this.setState({
//               count:this.state.count-1
//             })
//           }

//           inc=()=>{
//               this.setState({
//       count:this.state.count+1
//     })
//   }
//   render(){
//       return(
//           <div className="main">
//           <button onClick={this.dec}>-</button>

//         <h1>{this.state.count}</h1>

//           <button onClick={this.inc}>+</button>
//           </div>
//         )
//       }


//     }

//     export default App



import React from 'react';
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      color: 'white'
    }
  }



  render() {
    return (
        <div className='main'  >
          <div className='circle' style={{ backgroundColor: this.state.color }}></div>
          <div id='btn'>
            <button onClick={() => this.setState({ color: this.state.color = "red" })}>Stop</button>
            <button onClick={() => this.setState({ color: this.state.color = "yellow" })}>Ready</button>
            <button onClick={() => this.setState({ color: this.state.color = "green" })}>Go</button>
          </div>

        </div>
        )
  }
}

        export default App

