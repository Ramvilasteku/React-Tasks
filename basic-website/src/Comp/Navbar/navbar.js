import React from 'react'
import { Navbar, Nav, Badge , Button } from 'react-bootstrap'
import { AiOutlineShoppingCart } from "react-icons/ai"

import "./navbar.css"

const Navbar1 = () => {
  return (
    <>
      <Navbar bg='info' expand="lg" className='navbar'>
        <Navbar.Brand>Vilas Mart</Navbar.Brand>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse className='collapse'> 
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Services</Nav.Link>
            <Nav.Link>Anout</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>

          <Button variant="light">Login</Button>
          <Button variant="light">
            <AiOutlineShoppingCart size={20} /><Badge style={{top:-8}}>10</Badge>
          </Button>
        </Navbar.Collapse>

      </Navbar>
    </>

  )
}

export default Navbar1
