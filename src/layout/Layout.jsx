import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavLogo from "../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import Header from "./Header";
import Cookies from "js-cookie";

function Layout(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="px-0">
            <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            <div className="site-nav">
              <div className={`site-sub-menu ${isMenuOpen ? "active" : ""}`}>
                <div className="position-fixed-sub-menu">
                  <div className="logo-div">
                  </div>
                    <ul>
                      <li>
                        <NavLink
                          className="nav_links"
                          to="/"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Overview
                        </NavLink>
                      </li>
                    </ul>
                </div>
              </div>
              <div className="body-wrapper">
                <section className="padding-div">
                  <Container fluid>
                    <Row>
                      <Col>{props.children}</Col>
                    </Row>
                  </Container>
                </section>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;
