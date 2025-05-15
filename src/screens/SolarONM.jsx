import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Loader from "../components/loader/Loader.jsx";
import Barchart from "../charts/barchart/Barchart.js";
import { FaBell, FaIndustry, FaBox, FaInfo, FaEye } from "react-icons/fa";
import OverviewCard from "../components/overviewcard/OverviewCard.jsx";
import OverviewOnmCard from "../../../components/overviewonmcard/OverviewOnmCard";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Error from "../layout/Error.jsx";
import { BASE_URL } from "../constants.js";

function SolarONM() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const colorPallete = [
    "#c50101",
    "#EB9E29",
    "#65B94C",
    "#aa3dcb",
    "#29eb9d",
    "#aab850",
    "#FF7F75",
    "#06373A",
    "#D62828",
    "#B64074",
    "#429EBD",
    "#EA4A6B",
    "#05668D",
    "#213502",
    "#841E62",
    "#88304E",
    "#BDE12D",
    "#FFE720",
    "#C73618",
    "#2B2F6C",
    "#DE978F",
    "#7B716A",
    "#00F7FF",
    "#8E9C57",
  ];
  const [limit, setLimit] = useState(10);
  const indexOfLastData = currentPage * limit;
  const indexOfFirstData = indexOfLastData - limit;
  const currentData = tableData.slice(indexOfFirstData, indexOfLastData);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [allData, setAllData] = useState([]);
  const [allData2, setAllData2] = useState([]);
  const [saverity, setSaverity] = useState("all");
  // const saverityValue = () => {
  //   setSaverity(Cookies.set("Saverity", "Major"));
  // };
  const overviewcardData = [
    {
      overVal: allData.critical_alarms,
      overText: "Critical Alarms",
      image: <FaBell />,
      linkss: "/solaralarms",
      showLink: true,
      filter: "Critical",
      descr:
        "Critical faults indicate a serious issue that requires immediate attention and may cause the inverter to shut down. Examples of critical faults include overvoltage or undervoltage, overcurrent, ground fault, and short circuit.",
    },
    {
      overVal: allData.major_alarms,
      overText: "Major Alarms",
      image: <FaBell />,
      linkss: "/solaralarms",
      showLink: true,
      filter: "Major",
      descr:
        "Major faults indicate a less severe issue that can be addressed without immediate action but should still be addressed in a timely manner. Examples of major faults include communication errors, sensor failures, and temperature anomalies.",
    },
    {
      overVal: allData.minor_alarms,
      overText: "Minor Alarms",
      image: <FaBell />,
      linkss: "/solaralarms",
      showLink: true,
      filter: "Minor",
      descr:
        "Minor are messages that indicate potential issues or abnormal conditions that do not necessarily require immediate attention but should be monitored closely. Examples of minor faults include low power output, abnormal grid voltage or frequency, and DC voltage out of range.",
    },
    // {
    //   overVal: allData.minor_alarms,
    //   overText: "Minor Alarms",
    //   image: <FaBell />,
    //   linkss: "/solaralarms",
    //   showLink: true,
    //   filter: "Minor",
    //   descr: "Minor are messages that indicate potential issues or abnormal conditions that do not necessarily require immediate attention but should be monitored closely. Examples of warnings include low power output, abnormal grid voltage or frequency, and DC voltage out of range."
    // },
    {
      overVal: allData.total_sites,
      overText: "Total Sites",
      image: <FaIndustry />,
      linkss: "/solaralarms",
      showLink: true,
      filter: "all",
      descr: "No. of sites installed by FSEL",
    },
    {
      overVal: allData.platinum_customer,
      overText: "Platinum Sites",
      image: <FaBox />,
      linkss: "/solaralarms",
      showLink: true,
      filter: "Platinum",
      descr:
        "Platinum typically represents the highest level of service or membership, with the most comprehensive features, benefits, and support.",
    },
    {
      overVal: allData.gold_customer,
      overText: "Gold Sites",
      image: <FaBox />,
      linkss: "/solaralarms",
      showLink: true,
      filter: "Gold",
      descr:
        "Gold represents a middle-tier level of service or membership, with fewer features and benefits than Gold but still offering a high level of service.",
    },
    {
      overVal: allData.silver_customer,
      overText: "Silver Sites",
      image: <FaBox />,
      linkss: "/solaralarms",
      showLink: true,
      filter: "Silver",
      descr:
        "Silver typically represents the lowest level of service or membership, with the fewest features and benefits but still providing a basic level of service.",
    },
    {
      overVal: allData.other_customer,
      overText: "Other Sites",
      image: <FaBox />,
      linkss: "/solaralarms",
      showLink: true,
      filter: "Other",
      descr: "General sites with the basic memebership and services.",
    },
  ];

  const overviewcardData2 = [
    {
      overVal: "Resolved",
      overText: allData.resolved,
    },
    {
      overVal: "Received",
      overText: allData.recieved,
    },
    {
      overVal: "Average first response time",
      overText: allData.avg_first_response,
    },
    {
      overVal: "Average response time",
      overText: allData.avg_response,
    },
    {
      overVal: "Resolution with-in SLA",
      overText: allData.resolution_sla,
    },
  ];
  const [barData1, setBarData1] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });
  const [barOptions, setBarOptions] = useState({
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      yAxes: {
        beginAtZero: true,
        title: {
          display: true,
          text: "No Of Alarms",
          color: "#000",
          font: {
            size: 16,
            weight: 400,
          },
        },
        ticks: {
          stepSize: 1,
        },
      },
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Site Name",
          color: "#000",
          font: {
            size: 16,
            weight: 400,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 40,
          boxHeight: 2,
          color: "#000",
          font: {
            size: 16,
            weight: 500,
          },
        },
      },
    },
  });
  const [criticalTickets, setCriticalTickets] = useState([]);
  let date = new Date();
  let day = date.getDay();
  let date_num = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let system_time = {};
  system_time = [`${days[day]} ${date_num} ${months[month]} ${year}`];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // ================  API Request =======================//
      const response = await fetch(`${BASE_URL}/onm/onm/`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `JWT ${Cookies.get("Access")}`,
        },
      });
      if (!response.ok) {
        setError(response);
      }

      const dataValues = await response.json();

      // ================  API Request =======================//
      // ================ First Barchart Data =======================//
      const Bar1X = dataValues.site_wise_alarms[
        dataValues.site_wise_alarms.length - 1
      ].map((item) => {
        return item;
      });
      const Bar1YLbl = dataValues.site_wise_alarms[
        dataValues.site_wise_alarms.length - 2
      ].map((item) => {
        return item;
      });

      const Bar1Y = dataValues.site_wise_alarms
        .slice(0, dataValues.site_wise_alarms.length - 2)
        .map((item) => {
          return item;
        });

      let Bar1YY = [];
      for (let i = 0; i < Bar1Y[0].length; i++) {
        let temp = [];
        for (let j = 0; j < Bar1Y.length; j++) {
          temp.push(Bar1Y[j][i]);
        }
        Bar1YY.push(temp);
      }
      let barChartData1 = [];
      for (let i = 0; i < Bar1YY.length; i++) {
        barChartData1.push({
          label: Bar1YLbl[i],
          data: Bar1YY[i],
          backgroundColor: colorPallete[i],
          borderColor: colorPallete[i],
          borderWidth: 2,
          fill: false,
        });
      }
      setBarData1({
        labels: Bar1X,
        datasets: barChartData1,
      });

      // ================ First Barchart Data =========================//
      // ================ Table Data =================================//
      // ================ Table Data =================================//
      setAllData(dataValues);
      setIsLoading(false);
    };
    fetchData();
    setInterval(() => {
      fetchData();
      setIsLoading(false);
    }, 300000);
  }, []);

  useEffect(() => {
    const fetchData2 = async () => {
      setIsLoading2(true);

      // ================  API Request =======================//
      const response = await fetch(`${BASE_URL}/onm/alarms/`, {
        // method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `JWT ${Cookies.get("Access")}`,
        },
        // body: JSON.stringify(item),
      });
      if (!response.ok) {
        setError(response); // throw an error with the status code
      }
      const dataValues2 = await response.json();
      let tablevalue = [];
      dataValues2.alarms.slice(0, 10).map((item) => {
        if (item[item.length - 1] === "Critical") {
          tablevalue.push(item);
        }
        setCriticalTickets(tablevalue);
      });
      // ================  API Request =======================//

      // ================ Table Data =================================//
      // ================ Table Data =================================//
      setAllData2(dataValues2);
      setIsLoading2(false);
    };
    fetchData2();
  }, []);
  
  if (error) {
    return (
      <Row>
        <Col>
          <Error error={error.status} statusText={error.statusText} />
        </Col>
      </Row>
    );
  }
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Row>
        <Col lg={12} className="text-end py-3">
          <h2 className="main-heading">Operation and Maintenance (O&M)</h2>
        </Col>
      </Row>
      <Row className="mt-2">
        {overviewcardData.map((item, index) => (
          <Col lg={3} className="mt-3" key={index}>
            <OverviewCard
              overVal={item.overVal}
              overText={item.overText}
              image={item.image}
              showLink={item.showLink}
              linkss={item.linkss}
              filter={item.filter}
              descr={item.descr}
            />
          </Col>
        ))}
      </Row>
      <div className="box mt-5">
        <Row className="align-items-center">
          <Col lg={12}>
            <h3 className="sub-heading pb-3">
              Site Wise Alarms
              <span>{` as of ${system_time}`}</span>
            </h3>
          </Col>
          <Col lg={8}>
            <div className="">
              <Barchart
                chartData={barData1}
                height={150}
                options={barOptions}
              />
            </div>
          </Col>
          <Col lg={4} className="">
            <div className="">
              <Row>
                {overviewcardData2.map((item, index) => (
                  <Col lg={12} className="mt-3" key={index}>
                    <OverviewOnmCard
                      overVal={item.overVal}
                      overText={item.overText}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col xxl={4} className="mt-5">
          <div className="box">
            <div className="d-flex align-items-center">
              <h3 className="sub-heading me-2">Contractor Ranking</h3>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="button-tooltip-2">
                    This compares each contractor's performance (obtained
                    through the resolution of tickets) against the predefined
                    SLAs and ranks them accordingly, 100 being anything above
                    the defined timeline in the SLA and 0 is rated against the
                    highest time exceeding the defined timeline in the SLA
                  </Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <button {...triggerHandler} className="infoBtn" ref={ref}>
                    <FaInfo />
                  </button>
                )}
              </OverlayTrigger>
            </div>
            <div className="scoreTable">
              <Table responsive className="all-table">
                <thead>
                  <tr>
                    <th className="onm-td">Rank</th>
                    <th className="onm-td">Contractor</th>
                    <th className="onm-td">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {allData.Contractor.map((item, index) => (
                    <tr key={index}>
                      <td className="onm-td">{index + 1}</td>
                      <td className="onm-td">{item[0].slice(0, 10)}</td>
                      <td className="onm-td">{item[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
        <Col xxl={4} className="mt-5">
          <div className="box">
            <div className="d-flex align-items-center">
              <h3 className="sub-heading me-2">Supplier Ranking</h3>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="button-tooltip-2">
                    This compares each supplier's performance (obtained through
                    the resolution of tickets) against the predefined SLAs and
                    ranks them accordingly, 100 being anything above the defined
                    timeline in the SLA and 0 is rated against the highest time
                    exceeding the defined timeline in the SLA
                  </Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <button {...triggerHandler} className="infoBtn" ref={ref}>
                    <FaInfo />
                  </button>
                )}
              </OverlayTrigger>
            </div>
            <div className="scoreTable">
              <Table responsive className="all-table">
                <thead>
                  <tr>
                    <th className="onm-td">Rank</th>
                    <th className="onm-td">Supplier</th>
                    <th className="onm-td">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {allData.Supplier.map((item, index) => (
                    <tr key={index}>
                      <td className="onm-td">{index + 1}</td>
                      <td className="onm-td">{item[0].slice(0, 10)}</td>
                      <td className="onm-td">{item[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
        <Col xxl={4} className="mt-5">
          <div className="box">
            <div className="d-flex align-items-center">
              <h3 className="sub-heading me-2">O&M Ranking</h3>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="button-tooltip-2">
                    This compares each o&m team's performance (obtained through
                    the resolution of tickets) against the predefined SLAs and
                    ranks them accordingly, 100 being anything above the defined
                    timeline in the SLA and 0 is rated against the highest time
                    exceeding the defined timeline in the SLA
                  </Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <button {...triggerHandler} className="infoBtn" ref={ref}>
                    <FaInfo />
                  </button>
                )}
              </OverlayTrigger>
            </div>
            <div className="scoreTable">
              <Table responsive className="all-table">
                <thead>
                  <tr>
                    <th className="onm-td">Rank</th>
                    <th className="onm-td">O&M Team</th>
                    <th className="onm-td">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {allData.onm.map((item, index) => (
                    <tr key={index}>
                      <td className="onm-td">{index + 1}</td>
                      <td className="onm-td">{item[0].slice(0, 10)}</td>
                      <td className="onm-td">{item[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="mt-5">
          <div className="box">
            <h3 className="sub-heading pb-lg-5 pb-3">
              Unresolved Critical tickets
            </h3>
            <Table responsive className="all-table">
              <thead>
                <tr>
                  <th>Ticket ID</th>
                  <th>Site Name</th>
                  <th>Region</th>
                  <th>Alarm</th>
                  <th>Elapsed Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {criticalTickets.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                    <td>{item[6]}</td>
                    <td>{`${parseInt(item[7])} Days`}</td>
                    <td>
                      <Link to="/solaralarms" className="dropdown-item">
                        <FaEye />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default SolarONM;
