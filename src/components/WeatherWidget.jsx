import { useEffect, useState } from "react";
import useApikey from "../hooks/useApikey";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";
import axios from "axios";

import Loader from "./shared/Loader";

import "../styles/chart.css";

Chart.register(ArcElement, Tooltip, Legend);

const WeatherWidget = () => {
  const city = useSelector((state) => state.location.city);

  const [country, setCountry] = useState("");
  const [degrees, setDegrees] = useState(0);
  const [icon, setIcon] = useState();
  const [isLoaded, setIsloaded] = useState(false);
  const [chanceOfRain, setChanceOfRain] = useState(0);

  const apiKey = useApikey("https://api.weatherapi.com/v1/forecast.json?", city);

  useEffect(() => {
    axios
      .get(apiKey)
      .then((res) => res.data)
      .then((data) => {
        setCountry(data.location.country);
        setDegrees(data.current.temp_c);
        setIcon(data.current.condition.icon);
        setIsloaded(true);
        setChanceOfRain(data.forecast.forecastday[0].day.daily_chance_of_rain);
      })
    
  }, [apiKey]);

  const data = {
    labels: ["Temperature"],
    datasets: [
      {
        label: "Temperature",
        data: [chanceOfRain, 100 - chanceOfRain],
        backgroundColor: ["#4D99E7", "#FFFFFF"],
        borderWidth: 0,
        borderRadius: 20,
      },
    ],
  };

  const options = {
    rotation: 250,
    circumference: 220,
    cutout: "80%",
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    elements: {
      arc: {
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 20,
        shadowColor: "rgba(0, 0, 0, 0.3)",
      },
    },
  };

  return isLoaded ? (
      <div className="chart flex flex-col items-center h-full">
        <Doughnut className="absolute" data={data} options={options} />
        <div className="flex flex-col items-center text-white h-full justify-end py-10 gap-2 max-[460px]:gap-1">
          <img src={icon} alt="" />
          <h1 className="text-8xl max-[460px]:text-6xl">
            {Math.floor(degrees)}º
          </h1>
          <h2 className="text-4xl flex flex-col text-center">
            {city}
            <span className="text-2xl">{country}</span>
          </h2>
        </div>
      </div>
  ) : (
    <div className="flex justify-center items-center h-full">
      <Loader />
    </div>
  );
};

export default WeatherWidget;
