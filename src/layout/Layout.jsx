import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavLogo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

function Layout(props) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="px-0">
            <div className="site-nav">
              <div className="site-sub-menu">
                <div className="position-fixed-sub-menu">
                  <div className="logo-div">
                    <Link to="/">
                      <img src={NavLogo} alt="" className="navLogo" />
                    </Link>
                  </div>
                  {Cookies.get("EPC_Name") && (
                    <ul>
                      <li>
                        <NavLink className="nav_links" to="/">
                          Overview
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
              <div className="body-wrapper">
                <Header />
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
