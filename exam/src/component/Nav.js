import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  NavItem,
  Collapse,
  Nav,
} from "reactstrap";

function NavHome() {
  return (
    <div>
      <Navbar pading="5" color="dark" expand="md" light>
        <NavbarBrand>
          <Link
            className="text-white"
            style={{ textDecoration: "none" }}
            to="/"
          >
            Home
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="mc-auto " navbar>
            <NavItem>
              <NavLink className="text-white">
                <Link
                  className="text-white"
                  style={{ textDecoration: "none" }}
                  to="/Gallery"
                >
                  Photo Gallery
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  className="text-white"
                  style={{ textDecoration: "none" }}
                  to="/Aboutme"
                >
                  About me
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavHome;
