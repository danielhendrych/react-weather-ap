import React from "react";
import "./descriptions.css";

/* import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";*/

const Descriptions = ({ weather }) => {

    // values for description cards
  const cards = [
    {
      id: 1,
     
      title: "min",
      data: weather.temp_min.toFixed(),
      unit: "°C",
    },
    {
      id: 2,
      
      title: "max",
      data: weather.temp_max.toFixed(),
      unit: "°C",
    },
    {
      id: 3,
      
      title: "pocitově",
      data: weather.feels_like.toFixed(),
      unit: "°C",
    },
    {
      id: 4,
      
      title: "tlak",
      data: weather.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      
      title: "vlhkost",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      
      title: "rychlost větru",
      data: weather.speed.toFixed(),
      unit: "m/s",
    },
  ];

  //render description cards
  return (
    <div className="section section__descriptions">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="card">
          <div className="description__card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default Descriptions;