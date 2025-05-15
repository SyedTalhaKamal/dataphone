import React, { useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import AvatarUser from "../assets/images/user.png";
import NavLogo from "../assets/images/logo.png";
import { FaRegBell, FaBars, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

function Header({ toggleMenu, isMenuOpen }) {
  let access_token = Cookies.get("Refresh");
  let refresh_token = Cookies.get("Access");
  const navigate = useNavigate();

  useEffect(() => {
    if (!access_token && !refresh_token) {
      navigate("/");
    }
  }, []);

  const logout = () => {
    Cookies.remove("Refresh");
    Cookies.remove("Access");
    sessionStorage.clear();
    navigate("/");
  };
  const epc_name = Cookies.get("EPC_Name");
  const site_name = Cookies.get("Site_Name");

  return (
    <>
      <div className="headerBox d-flex align-items-center justify-content-between">
        <div className="logo-div">
          <Link to="/">
            <img src={NavLogo} alt="" className="navLogo" />
          </Link>
        </div>
        <div className="d-flex align-items-center justify-content-end">
          <Dropdown className="tableDown notifications">
            <Dropdown.Toggle id="dropdown-autoclose-true" className="headerDrp">
              <span className="position-relative">
                <FaRegBell className="header-bell" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <h3 className="text-center fw-bold mt-2">Notifications</h3>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="tableDown">
            <Dropdown.Toggle
              id="dropdown-basic"
              className="headerDrp d-flex align-items-center"
            >
              <span>{epc_name ? epc_name : site_name}</span>
              <img src={AvatarUser} alt="" className="user-avatar mx-2" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <h6 className="dropdown-item cursor-pointer" onClick={logout}>
                Logout
              </h6>
            </Dropdown.Menu>
          </Dropdown>
          <button className="hamburger-menu" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes onClick={() => toggleMenu(false)} />
            ) : (
              <FaBars />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
