import React, { useState, useEffect } from "react";
import Tabtitle from "../components/tabtitle/Tabtitle.jsx";
import { Col, Row } from "react-bootstrap";
import Cards from "../components/overviewcard/Cards.jsx";
import { FaChevronDown, FaBell, FaSyncAlt, FaSearch,FaCheckCircle} from "react-icons/fa";
import { GiSolarPower, GiElectric } from "react-icons/gi";
import { TbBuildingFactory } from "react-icons/tb";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import Cookies from "js-cookie";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FaInfo, FaPhoneAlt } from "react-icons/fa";
import Error from "../layout/Error.jsx";
import { BASE_URL, colors, getMaxValue } from "../constants.js";
import bluePhone from "../assets/images/blue_phone.png";
import purplePhone from "../assets/images/purple_phone.png";
import lightblueUsers from "../assets/images/lightblue_users.png";
import orangePhone from "../assets/images/orange_phone.png";
import redPhone from "../assets/images/red_phone.png";
import greenPhone from "../assets/images/green_phone.png";
import activeUser from "../assets/images/active_user.png";
import userProfile from "../assets/images/user_profile.png";

function Overview() {
  const pageTitle = "Live Calls";

  const topcardData = [
    {
      backgroundColor: "blueCard",
      cardVal: "3m 25s",
      cardText: "Average Call Duration",
      image: bluePhone,
    },
    {
      backgroundColor: "purpleCard",
      cardVal: "06:10:11",
      cardText: "Total Call Duration",
      image: purplePhone,
    },
    {
      backgroundColor: "lightblueCard",
      cardVal: "5,027",
      cardText: "Total Users",
      image: lightblueUsers,
    },
    {
      backgroundColor: "orangeCard",
      cardVal: "8,072",
      cardText: "Total Calls",
      image: orangePhone,
    },
    {
      backgroundColor: "redCard",
      cardVal: "35",
      cardText: "Missed Calls",
      image: redPhone,
    },
    {
      backgroundColor: "greenCard",
      cardVal: "2,572",
      cardText: "Answered Call",
      image: greenPhone,
    },
  ];
  const onlineUsersData = [
    {
      image: userProfile,
      name: "Otto Navarro",
      number: "(852) 947-9152",
      callIcon: <MdOutlinePermPhoneMsg />,
      callText: "101",
      durationIcon: "",
      duration: "",
      statusIcon: <FaCheckCircle/>,
      statusText: "Available",
      detailedView: false,
    },
  ];

  return (
    <Tabtitle title={pageTitle}>
      <Row>
        <Col lg={12} className="py-lg-0 py-3">
          <h2 className="main-heading">
            <FaPhoneAlt className="me-2" /> {pageTitle}
          </h2>
        </Col>
      </Row>
      <Row>
        {topcardData.map((item) => (
          <Col xxl={2} md={4} sm={6} className="mt-2" key={item.cardText}>
            <Cards
              cardVal={item.cardVal}
              cardText={item.cardText}
              image={item.image}
              backgroundColor={item.backgroundColor}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col lg={4} className="mt-lg-4 mt-3">
          <div className="box">
            <div className="innerBoxPadding">
              <div className="d-flex align-items-center">
                <img src={activeUser} alt="" className="sub-headingImg" />
                <h3 className="sub-heading">Avialable User Online</h3>
              </div>
              <div className="global-drp mt-lg-4 mt-3">
                <label htmlFor="sorting" className="global-selectLbl">
                  Sorting
                </label>
                <select
                  name="sorting"
                  id="sorting"
                  className="global-select"
                  value={"ascending"}
                >
                  <option value="ascending">Name (Ascending)</option>
                </select>
                <FaChevronDown className="global-selectarrow" />
              </div>
              <div className="position-relative mt-3">
                <input
                  type="text"
                  className="all-input searchIconPadding"
                  placeholder="Search"
                />
                <button className="search-icon">
                  <FaSearch />
                </button>
              </div>
            </div>
            <div className="bdrBtm">
              <div className="innerBoxPadding d-flex justify-content-between align-items-center"></div>
            </div>
          </div>
        </Col>
      </Row>
    </Tabtitle>
  );
}

export default Overview;
