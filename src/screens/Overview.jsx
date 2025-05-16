import React, { useState, useEffect } from "react";
import Tabtitle from "../components/tabtitle/Tabtitle.jsx";
import { Col, Row } from "react-bootstrap";
import Loader from "../components/loader/Loader.jsx";
import Barchart from "../charts/barchart/Barchart.js";
import OverviewCard from "../components/overviewcard/OverviewCard.jsx";
import { FaChevronDown, FaBell, FaSyncAlt } from "react-icons/fa";
import Mybtn from "../components/button/buttons.jsx";
import { GiSolarPower, GiElectric } from "react-icons/gi";
import { TbBuildingFactory } from "react-icons/tb";
import Cookies from "js-cookie";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FaInfo, FaPhoneAlt } from "react-icons/fa";
import Error from "../layout/Error.jsx";
import { BASE_URL, colors, getMaxValue } from "../constants.js";

function Overview() {
  const pageTitle = "Live Calls";

  const overviewcardData = [
    {
      overVal: 1,
      overText: "Offset Carbon (Tons)",
      image: <TbBuildingFactory />,
    },
    {
      overVal: 2,
      overText: "Total Installed Power (kW)",
      image: <GiSolarPower />,
    },
    {
      overVal: 3,
      overText: "Lifetime Energy (kWh)",
      image: <GiElectric />,
    },
    {
      overVal: 4,
      overText: "Total Active Alarms",
      image: <FaBell />,
      linkss: "/solaralarms",
    },
  ];

  return (
    <Tabtitle title={pageTitle}>
      <Row>
        <Col lg={12} className="py-3">
          <h2 className="main-heading">
            <FaPhoneAlt className="me-2" /> {pageTitle}
          </h2>
        </Col>
      </Row>
      <Row className="mt-2">
        {overviewcardData.map((item) => (
          <Col
            lg={3}
            sm={6}
            className="mt-3 overviewCardH2"
            key={item.overText}
          >
            <OverviewCard
              overVal={item.overVal}
              overText={item.overText}
              image={item.image}
              maxHeight100="maxHeight100"
            />
          </Col>
        ))}
      </Row>
    </Tabtitle>
  );
}

export default Overview;
