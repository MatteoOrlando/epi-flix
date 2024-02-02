import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MyNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <img src="../Components/logo.png" alt="logo" style={{ width: '100px', height: '55px' }}
                />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="nav-link active fw-bold" href="#">Home</Nav.Link>
                        <Nav.Link className="nav-link fw-bold" href="#">TV Shows</Nav.Link>
                        <Nav.Link className="nav-link fw-bold" href="#">Movies</Nav.Link>
                        <Nav.Link className="nav-link fw-bold" href="#">Recently Added</Nav.Link>
                        <Nav.Link className="nav-link fw-bold" href="#">My List</Nav.Link>
                        <div class="d-flex align-items-center">
                            <i class="bi bi-search icons"></i>
                            <div id="kids" class="fw-bold">KIDS</div>
                            <i class="bi bi-bell icons"></i>
                            <i class="bi bi-person-circle icons"></i>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;