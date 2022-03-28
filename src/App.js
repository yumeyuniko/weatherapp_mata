import React, { useState } from 'react';
import './App.css';

//Hooks
import useRequest from './hooks/useRequest';
//toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Components
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';

function App() {
  const [searchResults, setSearchResults] = useState('Fukui');
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${searchResults}&days=10&aqi=yes&alerts=no`;
  const { data } = useRequest(url);
  console.log(data);
  return (
    <div className="App">
      <ToastContainer />
      <h2 style={{ margin: '30px 0px' }}>WeatherApp</h2>
      {Object.keys(data).length !== 0 && (
        <>
          <Search setSearchResults={setSearchResults} />
          <CurrentWeather data={data} />
        </>
      )}
    </div>
  );
}

export default App;
