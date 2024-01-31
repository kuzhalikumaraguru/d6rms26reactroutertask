import React, { useState } from 'react';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Approutes from './utils/Approutes.jsx';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  const router = createBrowserRouter(Approutes);
  
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>Guvi Blogs</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">ALL</Nav.Link>
              <Nav.Link href="/fsd">FULL STACK DEVELOPMENT</Nav.Link>
              <Nav.Link href="/ds"> DATA SCIENCE</Nav.Link>
              <Nav.Link href="/cyber"> CYBER SECURITY</Nav.Link>
              <Nav.Link href="/career"> CAREER</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <RouterProvider router={router}/>
    </>
  );
}

export default App