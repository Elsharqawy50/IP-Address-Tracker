import React from "react";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";

const MainNavbar = () => {
  const router = useRouter();

  return (
    <header>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand className="navbarBrand">
              <img src="/nav/logo.svg" alt="logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            variant="dark"
            className="navbar-toggler"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav">
              <Link href="/" passHref>
                <a
                  className={`me-4 p-2 ${
                    router.pathname === "/" ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faHouseChimney} />
                  <span className="ms-2">Home</span>
                </a>
              </Link>
              <Link href="/ip-address-tracker" passHref>
                <a
                  className={`p-2 ${
                    router.pathname === "/ip-address-tracker" ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span className="ms-2">IP Address Lookup</span>
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default MainNavbar;
