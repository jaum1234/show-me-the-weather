import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import Home from './pages/Home';

import style from './App.module.css';
import './index.css';
import CurrentWeatherPage from './pages/CurrentWeather';
import ForecastPage from './pages/Forecast';
import ChooseWeather from './pages/ChooseWeather';

const App = () => 
{
  const [logoSrc, setLogoSrc] = useState('');

  useEffect(() => {
    const date = new Date();
    let hour = date.getHours();
    
    if (hour > 6 && hour < 18) {
      document.body.style.background = '#fff';
      document.body.style.color = '#000' 
      setLogoSrc('https://i.pinimg.com/originals/2e/69/fc/2e69fc7655735baea3651154dfe8c2bc.gif');
      return;
    }
    
    document.body.style.background = '#2e2e2e';
    document.body.style.color = '#000' 
    setLogoSrc('https://monophy.com/media/VCQ5AePssPvNtk5Ak4/monophy.gif')
  }, [logoSrc])


  return (
    <div className={ style.app }>
        <Logo src={ logoSrc }/>
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
