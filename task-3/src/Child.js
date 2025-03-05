import React from "react"

class Child extends React.Component{
    render(){
        console.log(this.props,"child comp");
        
       return(
        <div>
           {this.props.P_n}
           {this.props.cost}
        </div>
       )
    }
}

export default Child;