import axios from 'axios';
import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';

const Home = () => {
  const [searchValue, setSearchValue] = useState('Dhaka');
  const [weatherInfo, setWeatherInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=c0fefcbb0cafbc77fb9ed088964e7f3d`
      );
      const data = res.data;

      const { temp, humidity, pressure } = data.main;
      const { main: WeatherMode } = data.weather[0];
      const { speed } = data.wind;
      const { country, sunrise, sunset } = data.sys;
      const { name } = data;

      const WeatherInfo = {
        temp,
        humidity,
        pressure,
        WeatherMode,
        speed,
        country,
        sunrise,
        sunset,
        name,
      };

      setWeatherInfo(WeatherInfo);
    } catch (error) {
      // console.log(error.message);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <div className='h-screen bg-gray-300 grid place-content-center'>
      <div className='flex items-center justify-center gap-5'>
        <input
          type='search'
          className='px-4 py-1 rounded-md ring-1 outline-none focus:ring-2 focus:ring-blue-600'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          type='submit'
          className='bg-indigo-600 text-white px-5 py-2 rounded-md text-sm hover:bg-indigo-400 shadow-lg'
          onClick={getWeatherInfo}>
          Submit
        </button>
      </div>
      <WeatherCard weatherInfo={weatherInfo} />
    </div>
  );
};

export default Home;
