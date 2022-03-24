import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import Home from './pages/Home';

import style from './App.module.css';
import './index.css';
import CurrentWeatherPage from './pages/CurrentWeather';
import ForecastPage from './pages/Forecast';
import ChooseWeather from './pages/ChooseWeather';

const logo = 'https://i.pinimg.com/originals/2e/69/fc/2e69fc7655735baea3651154dfe8c2bc.gif'

const App = () => 
{
  return (
    <div className={ style.app }>
      <Logo src={ logo }/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path='/choose-weather' element={ <ChooseWeather/> }/>
        <Route path="/current-weather" element={ <CurrentWeatherPage/> }/>
        <Route path="/forecast" element={ <ForecastPage/> }/>
      </Routes>
    </div>
  )
}

export default App;
