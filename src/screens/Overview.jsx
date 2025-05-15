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
import { FaInfo } from "react-icons/fa";
import Error from "../layout/Error.jsx";
import { BASE_URL, colors, getMaxValue } from "../constants.js";

function Overview() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [allData, setAllData] = useState([]);

  const overviewcardData = [
    {
      overVal: allData.reduced_carbon,
      overText: "Offset Carbon (Tons)",
      image: <TbBuildingFactory />,
    },
    {
      overVal: allData.system_size,
      overText: "Total Installed Power (kW)",
      image: <GiSolarPower />,
    },
    {
      overVal: allData.total_energy,
      overText: "Lifetime Energy (kWh)",
      image: <GiElectric />,
    },
    {
      overVal: allData.active_alarms,
      overText: "Total Active Alarms",
      image: <FaBell />,
      linkss: "/solaralarms",
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
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "PR (%)",
          color: "#000",
          font: {
            size: 16,
            weight: 400,
          },
        },
      },
      x: {
        beginAtZero: true,
        max: getMaxValue(),
        title: {
          display: true,
          text: "Site Name",
          color: "#000",
          font: {
            size: 16,
            weight: 400,
          },
        },
        ticks: {
          autoSkip: false,
        },
      },
    },
    barPercentage: 0.9,
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
          speed: 100,
        },
      },
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

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      // ================  API Request =======================//
      // let item = {
      //   epc_name: Cookies.get("EPC_Name"),
      // };
      // const response = await fetch(`${BASE_URL}/performance/solar-overview/`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //     Authorization: `JWT ${Cookies.get("Access")}`,
      //   },
      //   body: JSON.stringify(item),
      // });
      // if (!response.ok) {
      //   setError(response); // throw an error with the status code
      // }
      // const dataValues = await response.json();

      const dataValues = {
        reduced_carbon: "0",
        system_size: "10",
        total_energy: "1",
        active_alarms: "0",
        pr_comparison: [
          [
            53.98147368421056, 24.8345263157896, 20.73094736842103,
            7.76084210526316, 24.336000000000006, 54.4707368421053, 80,
            13.30105263157895, 14.134736842105266, 56.75873684210527, 70,
          ],
          [
            65.57147707979632, 64.3382003395587, 22.2913412563668,
            8.344991511035655, 26.16774193548388, 73.6244482173176, 77,
            14.302207130730057, 15.198641765704588, 61.03089983022073, 74,
          ],
          ["Performance Ratio", "Temperature Corrected Performance Ratio"],
          [
            "Demo Site A",
            "Demo Site B",
            "Demo Site C",
            "Demo Site D",
            "Demo Site E",
            "Demo Site F",
            "Demo Site G",
            "Demo Site H",
            "Demo Site I",
            "Demo Site J",
            "Demo Site K",
          ],
        ],
      };
      setAllData(dataValues);
      // ================  API Request =======================//
      // ================ First Barchart Data =======================//
      const Bar1X = dataValues.pr_comparison[
        dataValues.pr_comparison.length - 1
      ].map((item) => {
        return item.split(" ").slice(0, 3);
      });
      const Bar1YLbl = dataValues.pr_comparison[
        dataValues.pr_comparison.length - 2
      ].map((item) => {
        return item;
      });
      const Bar1Y = dataValues.pr_comparison.map((item) => {
        return item;
      });
      let barChartData1 = [];
      for (let i = 0; i < Bar1Y.length - 2; i++) {
        barChartData1.push({
          label: Bar1YLbl[i],
          data: Bar1Y[i],
          backgroundColor: colors[i],
          borderColor: colors[i],
          borderWidth: 2,
          fill: false,
        });
      }
      setBarData1({
        labels: Bar1X,
        datasets: barChartData1,
      });
      // ================ First Barchart Data =========================//
      // ================ Second Polarchart Data =======================//

      setIsLoading(false);
    };
    fetchData();
    setInterval(() => {
      fetchData();
      setIsLoading(false);
    }, 300000 * 12);
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
    <Tabtitle title="Overview">
      <Row>
        <Col lg={12} className="text-end py-3">
          <h2 className="main-heading d-inline-block">Overview</h2>
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
              showLink={item.showLink}
              linkss={item.linkss}
              filter={item.showLink && item.filter}
              descr={item.showLink && item.descr}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col lg={12} className="mt-5">
          <div className="box">
            <h3 className="sub-heading pb-lg-5 pb-3">PR Comparison - Daily</h3>
            <Barchart
              chartData={barData1}
              height={
                window.innerWidth >= 1400
                  ? 100
                  : window.innerWidth >= 1200
                  ? 125
                  : window.innerWidth >= 992
                  ? 150
                  : window.innerWidth >= 768
                  ? 175
                  : window.innerWidth >= 576
                  ? 200
                  : 225
              }
              options={barOptions}
            />
          </div>
        </Col>
      </Row>
    </Tabtitle>
  );
}

export default Overview;
