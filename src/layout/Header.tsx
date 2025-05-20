import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate, Link } from "react-router-dom";
import AvatarUser from "../assets/images/user.png";
import NavLogo from "../assets/images/logo.png";
import {FaBars, FaTimes } from "react-icons/fa";


interface HeaderProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu, isMenuOpen }) => {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };


  return (
    <>
      <div className="headerBox d-flex align-items-center justify-content-lg-end justify-content-between">
        <div className="logo-div d-lg-none d-block">
          <Link to="/">
            <img src={NavLogo} alt="" className="navLogo" />
          </Link>
        </div>
        <div className="d-flex align-items-center justify-content-end">
          <Dropdown className="tableDown">
            <Dropdown.Toggle
              id="dropdown-basic"
              className="headerDrp d-flex align-items-center"
            >
              <div className="text-end">
                <p className="userName">John</p>
                <p className="userEmail">john@gmail.com</p>
              </div>
              <img src={AvatarUser} alt="" className="user-avatar" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <h6 className="dropdown-item cursor-pointer" onClick={logout}>
                Logout
              </h6>
            </Dropdown.Menu>
          </Dropdown>
          <button className="hamburger-menu" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;