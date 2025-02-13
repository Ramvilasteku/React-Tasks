import React from 'react'
import { Card, Button } from 'react-bootstrap'
import data from '../../data/data'
import './card.css'

const Card1 = () => {
    return (
        <>
           <h1>PRODUCTS</h1>
        <div className='cardsContainer'>   
            {data.map(x => {
                return (
                    <Card className='card'>
                        <Card.Img src={x.images} style={{ padding: 10, borderRadius: 10 }} className='img' />
                        <Card.Body>
                            <Card.Title>
                                {x.title}
                            </Card.Title>
                            <Card.Text>
                                {x.price}
                            </Card.Text>
                            <div className='btn'>
                                <Button variant='light'>AddToCart</Button>
                                <Button variant='light'>BuyKnow</Button>
                            </div>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
        </>
    )
}

export default Card1
