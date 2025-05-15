import React, { useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import AvatarUser from "../assets/images/user.png";
import NavLogo from "../assets/images/logo.png";
import { FaRegBell } from "react-icons/fa";
import { toast } from "react-toastify";

function Header() {
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
      <div className="box pb-3 d-flex justify-content-between align-items-center mb-2">
        <div className="logo-div">
          {/* <img src={NavLogo} alt="" className="navLogo" /> */}
        </div>
        <div className="d-flex align-items-center">
          <Dropdown className="tableDown notifications">
            <Dropdown.Toggle id="dropdown-autoclose-true" className="tbl-drp ">
              <span className="position-relative">
                <FaRegBell className="header-bell" />
                {/* <span className="noti-badge">5</span> */}
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <h3 className="text-center fw-bold mt-2">Notifications</h3>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="tableDown">
            <Dropdown.Toggle
              id="dropdown-basic"
              className="tbl-drp d-flex align-items-center"
            >
              <span>{epc_name ? epc_name : site_name}</span>
              <img src={AvatarUser} alt="" className="user-avatar ms-2" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <h6 className="dropdown-item cursor-pointer" onClick={logout}>
                Logout
              </h6>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}

export default Header;
