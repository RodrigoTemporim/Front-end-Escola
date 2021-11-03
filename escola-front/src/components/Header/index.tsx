import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';  

const Header: React.FC = () => {
    return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/alunos">Alunos</Nav.Link>          
        <NavDropdown title="Mais" id="collasible-nav-dropdown">
            <NavDropdown.Divider /> 
          <NavDropdown.Item href="cadastro_aluno">Cadastro</NavDropdown.Item>
          <NavDropdown.Item href="/loc">Localização</NavDropdown.Item>        
          <NavDropdown.Divider />          
        </NavDropdown>        
      </Nav>     
    </Navbar.Collapse>
    </Container>
  </Navbar>);
}

export default Header;
