import { Box } from "@chakra-ui/react";
import React from "react";
import ReactApexChart from "react-apexcharts";

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: props.data,
      options: {
        labels: props.labels,
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
    };
  }

  render() {
    return (
      <Box width={"60%"}>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
        />
      </Box>
    );
  }
}

export default PieChart;
