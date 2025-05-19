import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavLogo from "../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import Header from "./Header";
import Cookies from "js-cookie";
import { BiHomeSmile } from "react-icons/bi";
import { FaChevronDown, FaUserTie, FaUser } from "react-icons/fa";
import {
  MdOutlinePhoneInTalk,
  MdOutlinePhone,
  MdOutlineTextsms,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { CgUserList } from "react-icons/cg";
import { TbReportAnalytics } from "react-icons/tb";

function Layout(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const applicationsLinks = [
    {
      name: "Live Calls",
      path: "/",
      icon: <MdOutlinePhoneInTalk />,
    },
    { name: "Call Center", path: "/call_center", icon: <MdOutlinePhone /> },
    { name: "SMS", path: "/sms", icon: <MdOutlineTextsms /> },
    { name: "Contacts", path: "/contacts", icon: <TiContacts /> },
    { name: "PBX Portal", path: "/pbx_portal", icon: <CgUserList /> },
    { name: "Report", path: "/report", icon: <TbReportAnalytics /> },
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
                          <span className="navIcon me-2">
                            {<BiHomeSmile />}
                          </span>
                          Dashboard
                          <span className="ms-5">
                            <MdKeyboardArrowRight />
                          </span>
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
                            <span className="navIcon me-2">{link.icon}</span>{" "}
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
                    <div className="navUserRole text-center">
                      <span className="userRoleSpan active">
                        Admin <FaUserTie className="ms-2" />
                      </span>
                      <span className="ms-1 userRoleSpan">
                        User <FaUser className="ms-2" />
                      </span>
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
