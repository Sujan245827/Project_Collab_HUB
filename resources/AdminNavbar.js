import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    navigate('/');
  };

  return (
    <Navbar bg="white" expand="lg" fixed="top" className="navbar-light py-2 ps-3">
      <Container>
        <Navbar.Brand as={Link} to="/dashboard">
          <img
            id="pchlogo"
            className="d-none d-sm-block"
            src={process.env.PUBLIC_URL + '/img/pchlogo.png'}
            alt="PCH Logo"
            style={{ width: '200px' }}
          />
          <img
            className="d-block d-sm-none"
            src={process.env.PUBLIC_URL + '/img/pchlogo.png'}
            alt="PCH Logo"
            style={{ width: '130px' }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navmenu" className="nav-control" />

        <Navbar.Collapse id="navmenu">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/dashboard">
              <span className="textcolor">Dashboard</span>
            </Nav.Link>

            <NavDropdown title={<span className="textcolor">Instructors</span>} id="instructorsDropdown">
              <NavDropdown.Item as={Link} to="/addinstructors">Add Instructors</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/instructors">Manage Instructors</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span className="textcolor">Projects</span>} id="projectsDropdown">
              <NavDropdown.Item as={Link} to="/addprojects">Add Projects</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/projects">Manage Projects</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span className="textcolor">Groups</span>} id="groupsDropdown">
              <NavDropdown.Item as={Link} to="/addgroups">Add Group</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/groups">Manage Group</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/students">
              <span className="textcolor">Students</span>
            </Nav.Link>

            <Nav.Link as={Link} to="/notifications">
              <span className="textcolor">Notification</span>
            </Nav.Link>

            <Button variant="danger" onClick={handleLogout} className="ms-2">
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;