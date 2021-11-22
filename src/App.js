import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav,Row,Col,Offcanvas,FormControl,Form,Carousel } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
<>

<Navbar bg="primary" expand={false}>
  <Container fluid>
  <Navbar.Brand href="#home">
      <img
        src="https://i.ibb.co/pf5tYKT/Travel-Channel-logo.png"
        width="150"
        height="auto"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>

  <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://static.flynas.com/media/4136/arban.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3> الأردن</h3>
      <p>رحلات اسبوعية الى الأردن</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://static.flynas.com/media/4086/web-banner-kuwait-ar.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3> الكويت</h3>
      <p>رحلات اسبوعية الى الكويت</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static.flynas.com/media/4090/alula-web-banner-ar-2.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3> لبنان</h3>
      <p>رحلات اسبوعية الى لبنان</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  <Row>
    <Col xs>First, but unordered</Col>
    <Col xs={{ order: 12 }}>Second, but last</Col>
    <Col xs={{ order: 1 }}>Third, but second</Col>
  </Row>
</>
    </div>
  );
}

export default App;



