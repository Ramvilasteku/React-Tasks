import React from "react";

class App extends React.Component{
render(){
  const data=[{id:1,m_Name:'Pushpa2',m_Budget:'450CR'},{id:1,m_Name:'Devara',m_Budget:'300CR'},{id:1,m_Name:'Salaar',m_Budget:'270CR'}]

return(
<>
<h1>Movie Name with Budget</h1>

  {data.map(x=>{
    return(
      <Child/>
    )

  })}

</>

  )

}
}

export default App