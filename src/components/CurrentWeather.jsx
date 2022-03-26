import React from 'react';

function CurrentWeather({ data }) {
  return (
    <div>
      <div className="current-weather">
        <img src={data.current.condition.icon} alt="icon" />
        <h1>{data.current.temp_c}</h1>

        <div className="content">
          <h5>Precipitation: {data.current.precip_in}</h5>
          <h5>Wind: {data.current.wind_kph}</h5>
        </div>
      </div>
      <div className="location">
        <h2>{data.location.region}</h2>
        <h3>{data.location.country}</h3>
        <h4>{data.location.name}</h4>
      </div>
    </div>
  );
}

export default CurrentWeather;
