import { useState } from "react";
import "./Weather.css";
import DisplayWeather from "./DisplayWeather";

// ----------------------------------------------------------------
function Weather() {
  // const [unit, setUnit] = useState("");
  const [zip, SetZip] = useState("");
  const [data, setData] = useState(null);

  // ----------------------------------------------------------------
  async function getWeatherByZip() {
      const apikey = "99d7afef4025f501152e97275e4bd912";
      const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=imperial`;
      getWeather(path)
  }

  async function getWeatherByLocation(lat, lon) {
    const apikey =  "99d7afef4025f501152e97275e4bd912";
    const path = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;
    getWeather(path)
  }
  // ----------------------------------------------------------------
  async function getWeather(path) {
    try {
      const res = await fetch(path); // stop !
      const json = await res.json(); // stop !
      console.log(json);
      const temp = json.main.temp;
      const desc = json.weather[0].description;
      const name = json.name;
      setData({ temp, desc, name });
    } catch (err) {
      console.log(err.message);
    }
  }

  // ----------------------------------------------------------------
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;
    getWeatherByLocation(crd.latitude, crd.longitude)
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  return (
    <div className="Weather">
      <div>
        <h3> {data ? <DisplayWeather {...data} /> : null}</h3>
      </div>

      {/* Form Begins Here */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getWeatherByZip();
        }}
      >
        {/* Input Field Begins Here */}
        <input value={zip} onChange={(e) => SetZip(e.target.value)} />
        {/* Submit Button Begins here */}
        <button type="submit">Submit</button>
        <button
          onClick={() => {
            navigator.geolocation.getCurrentPosition(success, error, options);
          }}
        >
          By Location
        </button>
        {/* <div className="row">
          <label>
            <input
              type="radio"
              name="Unit"
              value="Fahrenheit"
              checked={unit === "Fahrenheit"}
              onChange={(e) => setUnit("Fahrenheit")}
            />{" "}
            Fahrenheit
          </label>

          <label>
            <input
              type="radio"
              name="Unit"
              value="Celsius"
              checked={unit === "Celsius"}
              onChange={(e) => setUnit("Celsius")}
            />{" "}
            Celsius
          </label>
        </div> */}
      </form>
    </div>
  );
}

export default Weather;
