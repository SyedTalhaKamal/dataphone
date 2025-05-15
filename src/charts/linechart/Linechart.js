import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
import { Chart } from "chart.js";
import { AiOutlineZoomOut } from "react-icons/ai";
Chart.register(zoomPlugin);

const Linechart = React.forwardRef((props, ref) =>{
  const chartRef = useRef(null);
  return (
    <>
      <Line
        data={props.chartData}
        height={props.height}
        options={props.options}
        ref={ref}
      />
    </>
  );
})

export default Linechart;
