import React from 'react'
import {Navbar,Nav,Container, Button, Badge} from 'react-bootstrap'
import { FaCartArrowDown } from "react-icons/fa";

const Navbar1 = () => {
  return (
    <div>
       <Navbar bg="info" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/recipes">Recipes</Nav.Link>
            <Button><FaCartArrowDown /><Badge >{8}</Badge></Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1
