import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavLogo from "../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import Header from "./Header";
import Cookies from "js-cookie";
import { FaChevronDown,FaUserTie,FaUser } from "react-icons/fa";

function Layout(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const applicationsLinks = [
    { name: "Live Calls", path: "/" },
    { name: "Call Center", path: "/call_center" },
    { name: "SMS", path: "/sms" },
    { name: "Contacts", path: "/contacts" },
    { name: "PBX Portal", path: "/pbx_portal" },
    { name: "Report", path: "/report" },
  ];

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="px-0">
            <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            <div className="site-nav">
              <div className={`site-sub-menu ${isMenuOpen ? "active" : ""}`}>
                <div className="position-fixed-sub-menu">
                  <div className="logo-div d-lg-block d-none">
                    <Link to="/">
                      <img src={NavLogo} alt="" className="navLogo" />
                    </Link>
                  </div>
                  <div className="DashboardDiv">
                    <ul>
                      <li>
                        <NavLink className="nav_links" to="/dashboard">
                          Dashboard
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="applicationHeading">Applications</h3>
                    <ul>
                      {applicationsLinks.map((link, index) => (
                        <li key={index}>
                          <NavLink className="nav_links" to={link.path}>
                            {link.name}
                          </NavLink>
                        </li>
                      ))}
                      {/* <li>
                      <NavLink
                        className="nav_links"
                        to="/"
                      >
                        Live Calls
                      </NavLink>
                    </li> */}
                    </ul>
                  </div>
                  <div className="navUserDiv">
                    <div className="navUser-drp">
                      <label htmlFor="Select Site" className="navUser-lbl">
                        Account
                      </label>
                      <select
                        name=""
                        id=""
                        className="navUser-allSelect"
                        value={"john_wilson"}
                      >
                        <option value="john_wilson">John Wilson</option>
                      </select>
                      <FaChevronDown className="navUser-selectarrow" />
                    </div>
                    <div className="navUserRole">
                      <span className="userRoleSpan active">Admin <FaUserTie className="ms-2"/></span>
                      <span className="ms-1 userRoleSpan">User <FaUser className="ms-2"/></span>
                    </div>
                  </div>
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
