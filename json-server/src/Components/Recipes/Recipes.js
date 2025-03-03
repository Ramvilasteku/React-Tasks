import { useEffect, useState } from "react"
import React from 'react'
import a from 'axios'
import {Card,Button} from 'react-bootstrap'

const Recipes = () => {
  const [data, setdata] = useState([])


  useEffect(() => {
    a.get('http://localhost:5000/recipes').then(res => {
      console.log(res.data)
      setdata(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div style={{display:'flex' , justifyContent:'space-around' , flexWrap:'wrap', padding:'3%' }} >
     {data.map(z=>{
      
      return (

    <Card style={{ width: '18rem',  margin:'1%'}}>
      <Card.Img variant="top" src={z.image} />
      <Card.Body>
        <Card.Title>{z.name}</Card.Title>
       <div style={{display:'flex' , gap:'20px'}} >
       <Button variant="primary">Add to cart</Button>
       <Button variant="primary">Delt Recipe</Button>
       </div>
      </Card.Body>
    </Card>
   
  


      )


    })}


    </div>
  )
}

export default Recipes
