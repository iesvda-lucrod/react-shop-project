import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

import Test from '../pages/Test';
import Test2 from '../pages/Test2';
import ContactPage from '../pages/ContactPage';

function Navigation() {
  return (
    <BrowserRouter>
    
    <Container fluid>
      <Row>
        <Col>
          <Navbar expand="md">
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>

            {/*Need to fetch the categories for this  VVV Placeholder*/}
            <Nav>
              <Nav.Link as={Link} to="/test1">Test1</Nav.Link>
              <Nav.Link as={Link} to="/test2">Test2</Nav.Link>
            </Nav>
                    {
                      /*
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                      */
                    }
                      

            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>


          </Navbar>
        </Col>
      </Row>
    </Container>

      <Routes>
        <Route path="/test1" element={<Test />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
