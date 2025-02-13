import React from 'react'
import { Nav, Navbar ,Button } from "react-bootstrap"
import '../Navbar/nav.css'

const Navbar1 = () => {
  return (
<>
<Navbar expand="md" className='navbar'>
        <Navbar.Brand>Candy UI</Navbar.Brand>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse> 
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Services</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>

        
        </Navbar.Collapse>

      </Navbar>
    </>


  )
}

export default Navbar1
