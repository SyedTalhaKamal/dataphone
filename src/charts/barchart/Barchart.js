import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
ChartJS.register(LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend, zoomPlugin);

function Barchart(props) {
  return (
    <Bar data={props.chartData} height={props.height} options={props.options} />
  );
}

export default Barchart;