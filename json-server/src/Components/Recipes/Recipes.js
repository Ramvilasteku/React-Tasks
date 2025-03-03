import { useEffect, useState } from "react"
import React from 'react'
import a from 'axios'
import {Card,Button} from 'react-bootstrap'

const Recipes = () => {
  const [x, setx] = useState([])


  useEffect(() => {
    a.get('http://localhost:5000/recipes').then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])



  return (
    <>
     {x.map(z=>{
      
      return(

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={z.image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   
  


      )


    })}


    </>
  )
}

export default Recipes
