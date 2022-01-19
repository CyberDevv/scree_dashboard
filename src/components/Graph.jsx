import { useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Graph = () => {
  const [data, setData] = useState({
    series: [
      {
        name: "Product Sales",
        data: [0, 4, 8, 16, 32, 16, 8, 4, 6, 8, 6, 7, 12, 18, 6],
      },
      {
        name: "Traffic",
        data: [0, 8, 16, 7, 16, 20, 10, 20, 12, 12, 16, 10, 5, 20, 10],
      },
    ],
    options: {
      chart: {
        // height: 4,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      labels: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
      ],
      yaxis: {
        tickAmount: 4,
        min: 0,
        max: 40,
      },
      colors: ["#EB5757", "#2F80ED"],
      legend: {
        fontSize: "12px",
        markers: {
          width: 8,
          height: 8,
        },
      },
      //  responsive: [
      //     {
      //        breakpoint: 1000,
      //        options: {
      //           plotOptions: {
      //              bar: {
      //                 horizontal: false,
      //              },
      //           },
      //           legend: {
      //              position: 'bottom',
      //           },
      //        },
      //     },
      //  ],
    },
  });

  return (
    <div id="chart">
      <Chart
        options={data.options}
        series={data.series}
        type="area"
        height={250}
      />
    </div>
  );

  // const domContainer = document.querySelector('#app');
  // ReactDOM.render(React.createElement(ApexChart), domContainer);
};

export default Graph;
