import React from "react"
import './App.css'
// import Child from "./Child";

// class App extends React.Component{
//   render(){
//     const Data=[{id:1, Pname:"laptop", cost:45000},{id:2, Pname:"laptop1", cost:55000}]
//     return(
//       <div>
//         {Data.map(v=>{
//                  console.log(v);
//                  return(
//                   <Child P_n={v.Pname} cost={v.cost}/>
//                  )

//         })}
//       </div>
//     )

//   }
// }
// export default App;





// import React from "react"
// class App1 extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       count:0
//      }
//   }
//   decrement=()=>{
//        this.setState({
//         count:this.state.count-1
//        })
//   }
//   increment=()=>{
//     this.setState({
//      count:this.state.count+1
//     })
// }
//   render(){
//     return(
//       <div style={{textAlign:"center"}}>
//         <button onClick={this.decrement}>-</button>
//         {this.state.count}
//         <button onClick={this.increment}>+</button>
//       </div>
//     )
//   }
// }
// export default App1;



class App2 extends React.Component{
  constructor(){
    super()
    this.state={
      Login:false
    }
    this.state={
      color:"salmon"
    }
  }
  render(){
    return(
      <div  id="parent" style={{backgroundColor:this.state.color}}>
        <button onClick={()=>this.setState({Login:!this.state.Login})}>Login</button>
        {this.state.Login &&  <div>
          <input placeholder="enter name here"/><br/>
          <input placeholder="enter Email here"/><br/>
          <input placeholder="enter paasword here"/><br/>
          <input placeholder="comform password here"/><br/>
          </div>} <br></br> <br></br>

          <button onClick={()=>this.setState({color:this.state.color="pink"})}>Pink</button>
          <button onClick={()=>this.setState({color:this.state.color="orange"})}>orange</button>
          <button onClick={()=>this.setState({color:this.state.color="blue"})}>Blue</button>

      </div>
    )
  }
}
export default App2;