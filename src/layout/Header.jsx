import React, { useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import AvatarUser from "../assets/images/user.png";
import NavLogo2 from "../assets/images/logo2.png";
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
      <div className="headerBox d-flex align-items-center justify-content-lg-end justify-content-between">
        <div className="logo-div d-lg-none d-block">
          <Link to="/">
            <img src={NavLogo2} alt="" className="navLogo" />
          </Link>
        </div>
        <div className="d-flex align-items-center justify-content-end">
          <Dropdown className="tableDown">
            <Dropdown.Toggle
              id="dropdown-basic"
              className="headerDrp d-flex align-items-center"
            >
              <div className="text-end">
                <p>John</p>
                <p>john@gmail.com</p>
              </div>
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
