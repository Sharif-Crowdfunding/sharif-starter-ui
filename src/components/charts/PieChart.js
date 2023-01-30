import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function PieChart({ labels, data }) {
  console.log(data,labels)
  const [state, setState] = useState({
    series: data,
    options: {
      labels: labels,
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <Box width={"60%"}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
      />
    </Box>
  );
}

export default PieChart;
