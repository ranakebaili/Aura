// NavBar.jsx

import React, { useEffect } from "react";
import { Container, Form, FormControl, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import { BsPerson, BsBoxArrowUpRight, BsFileText, BsShop, BsHouseDoor } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 

import { current, logout } from "../../JS/Actions/user"; 
import { currentAdmin } from "../../JS/Actions/admin"; 

import "./NavBar.css";


const NavBar = ({ inputSearch, setInputSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const admin = useSelector((state) => state.adminReducer.admin);
  const isAdmin = useSelector((state) => state.adminReducer.isAdmin);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  
  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentAdmin());
    }
  }, [dispatch]);

  return (
    <header className="NavBar">
      <Navbar expand="lg" className="v1">
        <Container fluid>
          <Nav.Link href="/" className="home">
            <BsHouseDoor size={30} className="ico" />
            <span className="v4">Home</span>
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", margin: "12%" }}
              navbarScroll
            >
              <Nav.Link href="/Products">
                <BsShop size={30} className="ico"/>
                <span className="v4">Our Products</span>
              </Nav.Link>

              <Nav.Link href="/AboutUs">
                <BsFileText size={30} className="ico"/>
                <span className="v4">About Us</span>
              </Nav.Link>
              <Form className="search">
                <FormControl
                  type="search"
                  placeholder="Search for a product"
                  value={inputSearch}
                  onChange={handleChange}
                  className="srch"
                />
              </Form>
              {isAuth ? (
                <div className="logout">
                  <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href={`/profile/${user._id}`}>
            <BsPerson size={30} className="ico" />
            <span className="v3">Profile</span>
            </a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="/" onClick={() => dispatch(logout())}>
              <BsBoxArrowUpRight size={30} className="ico" />
              <span className="v3">Logout</span>
            </a>
          </li>
        </ul>
      </div>
                </div>
              ) : isAuthAdmin && isAdmin ? (
                <div className="logoutAdmin">
                  <Nav.Link href="/AllOrders">
                    <BsShop size={30} className="ico"/>
                    <span className="v4">Order(s)</span>
                  </Nav.Link>
                  <Nav.Link href="/users">
                    <BsPerson size={30} className="ico"/>
                    <span className="v4">Users</span>
                  </Nav.Link>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="v11"
                      id="dropdown-basic"
                      variant="secondary"
                    >
                      <span className="v3">
                        <BsPerson size={25} />
                        {admin && admin.name}
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => navigate(`/profile/${admin._id}`)}
                      >
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Item href="/Products">Our Products</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        href="/"
                        onClick={() => dispatch(logout())}
                      >
                        <BsBoxArrowUpRight size={20} className="ico"/>
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ) : (
                <div className="logout">
                <div>
                  <a href="/login" className="nav-link">
                  <BsPerson className="ico" size={30} />
                    <span>Login</span>
                  </a>
                </div>
                <div>
                  <a href="/accountCreate" className="nav-link">
                  <BsPerson className="ico" size={30} />
                    <span>Sign Up</span>
                  </a>
                </div>
</div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;