import React from 'react'
import {Navbar,Container,Nav, Button} from 'react-bootstrap'
import {useNavigate} from "react-router-dom"

const Navbar1 = () => {
   
    const navigate = useNavigate();
  
  
    return (
    <div>
      <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><h3>Navbar</h3></Navbar.Brand>
          <Nav className="me-end">
            <Button className='m-2'  onClick={()=>navigate('/Signup')}>Signup</Button>
            <Button className='m-2'  onClick={()=>navigate('/Login')}>Login</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1
