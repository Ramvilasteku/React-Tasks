import { useEffect, useState } from "react"
import React from 'react'
import a from 'axios'
import { Card, Button } from 'react-bootstrap'

const Recipes = () => {
  const [data, setdata] = useState([])
  const [recipedlt, setrecipedlt] = useState(null)

  useEffect(() => {
    a.get('http://localhost:5000/recipes').then(res => {
      console.log(res.data)
      setdata(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [recipedlt])

  const addToCart = (addcart) => {
    alert("added item")
    a.post('http://localhost:5000/CartItme', addcart)
  }

  const deltRecipe = async (abc) => {
    try {
      alert('Recipe delt successfully')
      await a.delete(`http://localhost:5000/recipes/${abc.id}`)
      setrecipedlt(abc)
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '3%' }} >
      {data.map(z => {

        return (

          <Card style={{ width: '18rem', margin: '1%' }}>
            <Card.Img variant="top" src={z.image} />
            <Card.Body>
              <Card.Title>{z.name}</Card.Title>
              <div style={{ display: 'flex', gap: '20px' }} >
                <Button variant="primary" onClick={() => addToCart(z)}>Add to cart</Button>
                <Button variant="primary" onClick={() => deltRecipe(z)}>Delt Recipe</Button>
              </div>
            </Card.Body>
          </Card>




        )


      })}


    </div>
  )
}

export default Recipes
