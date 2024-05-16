import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function CNavbar() {
  return (
    <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
    <Container>
      <Navbar.Brand>
        <Link to="/" className='navbar-brand text-success fw-semibold'>
          Java Restaurant
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto justify-content-end w-100'>
          <Link to='/' className='nav-link active text-uppercase'>Home</Link>
          <Link to='/menu' className='nav-link text-uppercase'>Menu</Link>
          <Link to='/about' className='nav-link text-uppercase'>About</Link>
          <Link to='/contact' className='nav-link text-uppercase'>Contact</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default CNavbar
