import "../styles.css";
import { Navbar, Nav } from "react-bootstrap";
import React from "react";
// import { Link } from "react-scroll";
import { NavHashLink as Link } from "react-router-hash-link";

export default function NavbarDefault() {
  const scrollWithOffset = (el, offset) => {
    window.scroll({
      top: el.offsetTop - offset,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="sm"
        className="navbar"
        bg="navbar"
        variant="dark"
      >
        {/* <LinkContainer to="/"> */}
        <Navbar.Brand id="brand"></Navbar.Brand>
        {/* </LinkContainer> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link
              rel="icon"
              type="image/png"
              sizes="16x16"
              activeClass="active"
              to="/#home"
              spy={true}
              smooth={true}
              scroll={(el) => scrollWithOffset(el, 75)}
              exact
              className="{faKissWinkHeart}"
            >
              Home
            </Link>

            <Link
              activeClass="active"
              to="/#gallery"
              spy={true}
              smooth={true}
              duration={500}
              scroll={(el) => scrollWithOffset(el, 75)}
              exact
              className="nav-link"
            >
              Gallery
            </Link>
            <Link
              activeClass="active"
              to="/#details"
              spy={true}
              smooth={true}
              duration={500}
              exact
              className="nav-link"
            >
              Details
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
