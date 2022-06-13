import React from 'react'
import { Button,Navbar,Container,Nav,NavDropdown,Form, } from 'react-bootstrap'

export const NaveBars = () => {
  return (
    <div>
       <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://www.meilleure-innovation.com/wp-content/uploads/2021/05/logo-youtube-png-transparent.png" alt='logo youtube ' id='logo'></img></Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              id='cherche'
             
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
