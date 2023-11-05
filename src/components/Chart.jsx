import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  plugins,
} from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import datalabels from "chartjs-plugin-datalabels";
import { useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  plugins,
  datalabels
);

const Chart = (props) => {
  const [fcstTimeList, setFcstTimeList] = useState([]);
  const [tempValueList, setTempValueList] = useState([]);
  const [humidityValueList, setHumidityValueList] = useState([]);

  const data = {
    // labels: ["0800", "0900", "1000", "1100", "1200", "1300"],
    labels: fcstTimeList,
    datasets: [
      {
        type: "line",
        label: "온도",
        yAxisID: "y1",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 2,
        // data: [1, 2, 3, 4, 5, 6],
        data: tempValueList,
        fill: false,
        datalabels: {
          display: true,
          align: "top",
          anchor: "start",
          formatter: (value, context) => {
            return value + "°";
          },
          color: "black",
        },
      },
      {
        type: "bar",
        label: "습도",
        yAxisID: "y2",
        backgroundColor: ({ chart }) => {
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            // This can happen when the chart is not visible yet.
            return null;
          }
          const gradientFill = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
          );
          gradientFill.addColorStop(0, "rgba(0, 0, 255, 0.5)");
          gradientFill.addColorStop(1, "rgba(0, 0, 255, 0.1)");
          return gradientFill;
        },
        // data: [60, 70, 30, 40, 50, 70],
        data: humidityValueList,
        borderWidth: 2,
        datalabels: {
          display: true,
          align: "top",
          anchor: "start",
          formatter: (value, context) => {
            return value + "%";
          },
          color: "white",
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      y1: {
        display: false,
        type: "linear",
        position: "left",
        grid: { display: false },
        min: -5,
        max: 25,
      },
      y2: {
        type: "linear",
        position: "right",
        grid: { display: false },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  useEffect(() => {
    if (props.weatherData) {
      setFcstTimeList([...props.weatherData.fcstTimeList]);
      setTempValueList([...props.weatherData.tempValueList]);
      setHumidityValueList([...props.weatherData.humidityValueList]);
    }
  }, [props.weatherData]);
  return (
    <div className="w-full h-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
