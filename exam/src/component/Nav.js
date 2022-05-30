import React from "react";
// import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
  Nav,
} from "reactstrap";

function NavHome() {
  return (
    <div>
      <Navbar pading="5" color="dark" expand="md" light>
        <NavbarBrand className="text-white" href="/home">
          Home
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto " navbar>
            <NavItem>
              <NavLink className="text-white" href="/Gallery">
                Photo Gallery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/Aboutme">
                About me
              </NavLink>
            </NavItem>
          </Nav>
          <NavLink className="text-white" href="/Aboutme">
            Photo Gallery
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavHome;
