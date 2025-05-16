import React, { useState, useEffect } from "react";
import Tabtitle from "../components/tabtitle/Tabtitle.jsx";
import { Col, Row } from "react-bootstrap";
import OverviewCard from "../components/overviewcard/OverviewCard.jsx";
import { FaChevronDown, FaBell, FaSyncAlt } from "react-icons/fa";
import { GiSolarPower, GiElectric } from "react-icons/gi";
import { TbBuildingFactory } from "react-icons/tb";
import Cookies from "js-cookie";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FaInfo, FaPhoneAlt } from "react-icons/fa";
import Error from "../layout/Error.jsx";
import { BASE_URL, colors, getMaxValue } from "../constants.js";
import bluePhone from "../assets/images/blue_phone.png"
import purplePhone from "../assets/images/purple_phone.png"
import lightblueUsers from "../assets/images/lightblue_users.png"
import orangePhone from "../assets/images/orange_phone.png"
import redPhone from "../assets/images/red_phone.png"
import greenPhone from "../assets/images/green_phone.png"

function Overview() {
  const pageTitle = "Live Calls";

  const overviewcardData = [
    {
      backgroundColor: "blueCard",
      overVal: "3m 25s",
      overText: "Average Call Duration",
      image: bluePhone,
    },
    {
      backgroundColor: "purpleCard",
      overVal: "06:10:11",
      overText: "Total Call Duration",
      image: purplePhone,
    },
    {
      backgroundColor: "lightblueCard",
      overVal: "5,027",
      overText: "Total Users",
      image: lightblueUsers,
    },
    {
      backgroundColor: "orangeCard",
      overVal: "8,072",
      overText: "Total Calls",
      image: orangePhone,
    },
    {
      backgroundColor: "redCard",
      overVal: "35",
      overText: "Missed Calls",
      image: redPhone,
    },
    {
      backgroundColor: "greenCard",
      overVal: "2,572",
      overText: "Answered Call",
      image: greenPhone,
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
      <Row className="mt-2">
        {overviewcardData.map((item) => (
          <Col
            xxl={2}
            md={4}
            sm={6}
            className="mt-2"
            key={item.overText}
          >
            <OverviewCard
              overVal={item.overVal}
              overText={item.overText}
              image={item.image}
              backgroundColor={item.backgroundColor}
            />
          </Col>
        ))}
      </Row>
    </Tabtitle>
  );
}

export default Overview;
