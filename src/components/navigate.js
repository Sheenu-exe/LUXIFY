
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Favorite} from "@mui/icons-material";
import {HelpCenter} from '@mui/icons-material';
import { ShoppingCart } from 'lucide-react';



export default function Navigate() {

    return (
        
          <div >
          {[false].map((expand) => (
            <Navbar className="navbphn" style={{backgroundColor:"#0d0221" }} key={expand} expand={expand} >
              <Container fluid>
                <Navbar.Brand style={{color:"#A6CFD5",fontFamily:"Playfair Display"}} href="/">LUXIFY</Navbar.Brand>
                <Navbar.Toggle style={{backgroundColor:"#A6CFD5"}} aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      Menu
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="cart"><ShoppingCart/>Home</Nav.Link>
                      <Nav.Link href="#action2"><HelpCenter/> Link</Nav.Link>
                      <NavDropdown
                        title="Dropdown"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="#action3"><Favorite/> Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
          </div>
)
}