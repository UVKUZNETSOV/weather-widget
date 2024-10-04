import WeatherWrapper from "./components/WeatherWrapper";

import { useDispatch, useSelector } from "react-redux";
import useApikey from "./hooks/useApikey";
import { useEffect } from "react";
import axios from "axios";
import { setBackgroundColor } from "./store/background/background.slice";

const App = () => {
  const location = useSelector(state => state.location.city);
  const link = useApikey("https://api.weatherapi.com/v1/current.json?", location);
  const background = useSelector(state => state.background);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(link)
      .then(res => res.data)
      .then(data => {
        dispatch(setBackgroundColor(data.current.is_day));
      })
      .catch(error => console.error(error));
  }, [link, dispatch]);

  const appStyles = "w-screen h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center";
  
  return (
    <>
      <div className={background.isDay === 1 ? appStyles + " bg-[url('./assets/bg.jpg')]" : appStyles + " bg-[url('./assets/bg-night.png')]"}>
        <WeatherWrapper />
      </div>
    </>
  );
};

export default App;