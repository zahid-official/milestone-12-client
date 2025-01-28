import React from "react";
import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const [state] = React.useState({
    series: [
      {
        name: "Series-1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Series-2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],

    options: {
      chart: {
        height: 285,
        type: "area",
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
        labels: {
          style: {
            colors: "#FFFFFF", // Set x-axis label color to white
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#FFFFFF", // Set y-axis label color to white
            fontSize: "12px",
          },
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div className="h-full">
      <div
        id="chart"
        className="bg-[#0f252a] sm:py-20 py-10 rounded-lg shadow-2xl"
      >
        <h2 className="text-white font-bold text-center text-3xl pb-4">
          Graph
        </h2>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={285}
          className="w-[92%] mx-auto"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Chart;
