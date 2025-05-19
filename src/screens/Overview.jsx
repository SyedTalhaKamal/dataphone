import React, { useState, useEffect } from "react";
import Tabtitle from "../components/tabtitle/Tabtitle.jsx";
import { Col, Row } from "react-bootstrap";
import Cards from "../components/overviewcard/Cards.jsx";
import {
  FaChevronDown,
  FaBell,
  FaSyncAlt,
  FaSearch,
  FaCheckCircle,
  FaRegClock,
  FaInfo,
  FaPhoneAltFaInfo,
  FaPhoneAlt,
} from "react-icons/fa";
import { GiSolarPower, GiElectric } from "react-icons/gi";
import { TbBuildingFactory } from "react-icons/tb";
import {
  MdOutlinePermPhoneMsg,
  MdOutlineSupportAgent,
  MdOutlinePhoneInTalk,
} from "react-icons/md";
import { RiEqualizerLine } from "react-icons/ri";
import {
  BsFillTelephoneOutboundFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import Cookies from "js-cookie";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
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
import tick from "../assets/images/tick.png";
import phone from "../assets/images/phone.png";
import clock from "../assets/images/clock.png";
import logout from "../assets/images/logout.png";
import userProfile2 from "../assets/images/userIcon2.png";
import pauseIcon from "../assets/images/pauseIcon.png";
import recordIcon from "../assets/images/recordIcon.png";
import Icon3 from "../assets/images/icon3.png";
import Icon4 from "../assets/images/icon4.png";

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
      callIcon: <MdOutlinePermPhoneMsg />,
      callText: "101",
      statusIcon: tick,
      statusText: "Available",
      detailedView: false,
    },
    {
      image: userProfile,
      name: "Ross Mason",
      number: "(852) 947-9152",
      callIcon: <MdOutlineSupportAgent />,
      callText: "Arnold Smith",
      durationIcon: <FaRegClock />,
      duration: "00:10:00",
      statusIcon: phone,
      statusText: "On Call",
      detailedView: true,
    },
  ];
  const callingData = [
    {
      image: userProfile2,
      name: "Ross Mason",
      callIcon: <MdOutlinePermPhoneMsg />,
      callId: "101",
      statusIcon: <BsFillTelephoneOutboundFill />,
      statusText: "Answered to Reception 3 (108) ",
      numberIcon: <TiContacts />,
      number: "(852) 947-9152",
      duration: "00:10:00",
      pauseIcon: pauseIcon,
      recordIcon: recordIcon,
      Icon3: Icon3,
      Icon4: Icon4,
    },
    {
      image: userProfile2,
      name: "Ross Mason",
      callIcon: <MdOutlinePermPhoneMsg />,
      callId: "101",
      statusIcon: <BsFillTelephoneOutboundFill />,
      statusText: "Answered to Reception 3 (108) ",
      numberIcon: <TiContacts />,
      number: "(852) 947-9152",
      duration: "00:10:00",
      pauseIcon: pauseIcon,
      recordIcon: recordIcon,
      Icon3: Icon3,
      Icon4: Icon4,
    },
    {
      image: userProfile2,
      name: "Ross Mason",
      callIcon: <MdOutlinePermPhoneMsg />,
      callId: "101",
      statusIcon: <BsFillTelephoneOutboundFill />,
      statusText: "Answered to Reception 3 (108) ",
      numberIcon: <TiContacts />,
      number: "(852) 947-9152",
      duration: "00:10:00",
      pauseIcon: pauseIcon,
      recordIcon: recordIcon,
      Icon3: Icon3,
      Icon4: Icon4,
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
        <Col xxl={4} className="mt-xxl-4 mt-3">
          <div className="box">
            <div className="innerBoxPadding">
              <div className="d-flex align-items-center">
                <img src={activeUser} alt="" className="sub-headingImg" />
                <h3 className="sub-heading">Avialable User Online</h3>
              </div>
              <Row>
                <Col xxl={12} sm={6}>
                  <div className="global-drp mt-xxl-4 mt-3">
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
                </Col>
                <Col xxl={12} sm={6}>
                  <div className="position-relative mt-xxl-4 mt-3">
                    <input
                      type="text"
                      className="all-input searchIconPadding"
                      placeholder="Search"
                    />
                    <button className="search-icon">
                      <FaSearch />
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
            {onlineUsersData.map((item, index) => (
              <div className="bdrBtm" key={index}>
                <div className="innerBoxPadding d-flex align-items-center justify-content-between mt-2">
                  <div className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt=""
                      className="userProfileImg me-2"
                    />
                    <div>
                      <h4 className="userProfileName">{item.name}</h4>
                      {item.detailedView && (
                        <p className="userNumber">{item.number}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center">
                      <span className="callIcon">{item.callIcon}</span>
                      <span className="callDur">{item.callText}</span>
                    </div>
                    {item.detailedView && (
                      <div className="d-flex align-items-center mt-1">
                        <span className="callIcon">{item.durationIcon}</span>
                        <span className="callDur">{item.duration}</span>
                      </div>
                    )}
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={item.statusIcon} alt="" className="statusImg" />
                    <span className="statusText">{item.statusText}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Col>
        <Col xxl={8} className="mt-xxl-4 mt-3">
          <div className="box h-100">
            <div className="innerBoxPadding">
              <Row>
                <Col sm={6}>
                  <div className="position-relative">
                    <input
                      type="text"
                      className="all-input searchIconPadding"
                      placeholder="Search"
                    />
                    <button className="search-icon">
                      <FaSearch />
                    </button>
                  </div>
                </Col>
                <Col sm={6} className="text-end mt-sm-0 mt-3">
                  <button className="filterBtn">
                    <RiEqualizerLine className="me-2" /> Filters
                  </button>
                </Col>
                {callingData.map((item, index) => (
                  <Col xxl={12} className="mt-3" key={index}>
                    <div className="callingDataDiv">
                      <div className="d-flex align-items-center">
                        <img
                          src={item.image}
                          alt=""
                          className="userProfileImg2 me-2"
                        />
                        <div>
                          <h4 className="userProfileName">{item.name}</h4>
                          <div className="d-flex align-items-center mt-1">
                            <span className="callIcon">{item.callIcon}</span>
                            <span className="callDur">{item.callId}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex align-items-center mt-sm-0 mt-4">
                          <span className="callIcon">{item.statusIcon}</span>
                          <span className="callDur">{item.statusText}</span>
                        </div>
                        <div className="d-flex align-items-center mt-1">
                          <span className="callIcon">{item.numberIcon}</span>
                          <span className="userNumber">{item.number}</span>
                        </div>
                      </div>
                      <div className="buttonDiv">
                        <span className="durationDiv">{item.duration}</span>
                        <span className="d-inline-block mt-sm-4 mt-3">
                          <button>
                            <img src={item.pauseIcon} />
                          </button>
                          <button>
                            <img src={item.recordIcon} />
                          </button>
                          <button>
                            <img src={item.Icon3} />
                          </button>
                          <button>
                            <img src={item.Icon4} />
                          </button>
                        </span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Tabtitle>
  );
}

export default Overview;
