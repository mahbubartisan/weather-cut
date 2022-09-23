import React, { useState, useEffect } from 'react';

const WeatherCard = ({ weatherInfo }) => {
  const [WeatherState, setWeatherState] = useState('');
  const {
    temp,
    humidity,
    pressure,
    WeatherMode,
    speed,
    country,
    sunrise,
    sunset,
    name,
  } = weatherInfo;

  let sec = sunset;
  let sunsetTime = new Date(sec * 1000);
  let timeStr = sunsetTime.toLocaleTimeString();

  let sec2 = sunrise;
  let sunriseTime = new Date(sec2 * 1000);
  let timeStr2 = sunriseTime.toLocaleTimeString();

  let time = new Date();
  let currentTime = time.toLocaleTimeString();

  useEffect(() => {
    if (WeatherMode) {
      switch (WeatherMode) {
        case 'Clouds':
          setWeatherState('wi wi-cloud');
          break;
        case 'Haze':
          setWeatherState('wi wi-day-haze');
          break;
        case 'Clear':
          setWeatherState('wi wi-day-sunny');
          break;

        default:
          setWeatherState('wi wi-day-sunny');
          break;
      }
    }
  }, [WeatherMode]);

  return (
    <>
      <div className='w-auto h-96 bg-white shadow-xl rounded-lg mt-5 font-roboto'>
        <div className='grid place-content-center'>
          <i className={`wi ${WeatherState} text-9xl mt-6 text-[#924da3]`}></i>
        </div>
        {/* icon segment */}

        <div className='grid grid-cols-3 place-content-center bg-teal-600 mt-7'>
          <h1 className='text-5xl p-6'>
            <span className='font-bold text-white'>
              {Math.round(temp)}&deg;C
            </span>
          </h1>
          <div className='flex flex-col mt-5'>
            <h1 className='text-xl text-slate-300 ml-5 uppercase'>
              {WeatherMode}
            </h1>
            <span className='text-sm text-white ml-5'>
              {name}, {country}
            </span>
          </div>

          <div className='flex items-center justify-center bg-indigo-600'>
            <h1 className='text-white'>{currentTime}</h1>
          </div>
        </div>
        {/* end first grid */}
        <div className='grid grid-cols-4 p-3 mt-5'>
          <div className='flex'>
            <i className='wi wi-sunset text-[#924da3]'></i>
            <div className='flex-shrink-0 px-3'>
              <h1 className='text-sm'>{timeStr}</h1>
              <span className='text-sm'>Sunset</span>
            </div>
          </div>
          <div className='flex'>
            <i className='wi wi-sunrise text-[#924da3]'></i>
            <div className='flex-shrink-0 px-3'>
              <h1 className='text-sm'>{timeStr2}</h1>
              <span className='text-sm'>Sunrise</span>
            </div>
          </div>
          <div className='flex'>
            <i className='wi wi-humidity text-[#924da3]'></i>
            <div className='flex-shrink-0 px-3'>
              <h1 className='text-sm'>{humidity}%</h1>
              <span className='text-sm'>Humidity</span>
            </div>
          </div>
          <div className='flex'>
            <i className='wi wi-strong-wind text-[#924da3]'></i>
            <div className='flex-shrink-0 px-3'>
              <h1 className='text-sm'>{speed} km/h</h1>
              <span className='text-sm'>Wind</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
