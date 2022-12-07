import hotBg from "./assets/hot.jpg"
import coldBg from "./assets/cold.jpg"
import Descriptions from "./components/Descriptions"
import { useEffect, useState } from "react";
import { getFormattedData } from "./weatherService";



function App() {

  //initial states
  const [city, setCity] = useState("Berlin")
  const [weather, setWeather] = useState(null)
  const [bg, setBg] = useState(hotBg)

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedData(city)
      setWeather(data)

      // dynamic background
      if (data.temp <= 10) setBg(coldBg); 
      else setBg(hotBg)


    }
   fetchWeatherData()
  }, [city])

// Handling enterd cities
  const enteredCity = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  }
  return (
    <div className="app" style={{backgroundImage:  `url(${bg})`}}>
      <div className="overlay">

        {weather && (
        <div className="container">
          <div className="section section__inputs">
            <input onKeyDown={enteredCity} type="text" name="city" placeholder="Zadejte město..."  />
          </div>
          { /* Display fetched data */ }
          <div className="section section__temperature">
            <div className="icon">
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img src={weather.iconURL} alt="weatherIcon"/>
              <h3>{weather.description}</h3>
            </div>
          <div className="temperature">
            <h1>{`${weather.temp.toFixed()} °C`}</h1>
          </div>
          </div>
        
          { /* bottom description */ }

          <Descriptions weather = {weather}/>
        </div>
        )}
        
      </div>
    </div>
  );
}

export default App;
