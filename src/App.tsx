import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './components/shared/Logo/Logo';
import Home from './view/Home/Home';
import Weather from './view/Weather/Weather';

import './App.css';
import './index.css';

const App = () => 
{
  const [logoSrc, setLogoSrc] = useState('');

  useEffect(() => {
    const date = new Date();
    let hour = date.getHours();
    
    if (hour > 6 && hour < 18) {
      document.body.style.background = 'white';
      document.body.style.color = 'black' 
      setLogoSrc('https://i.pinimg.com/originals/2e/69/fc/2e69fc7655735baea3651154dfe8c2bc.gif');
      return;
    }
    
    document.body.style.background = '#2e2e2e';
    document.body.style.color = 'white' 
    setLogoSrc('https://monophy.com/media/VCQ5AePssPvNtk5Ak4/monophy.gif')
  })


  return (
    <div className='app'>
        <Logo src={ logoSrc }/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="weather" element={ <Weather/> }/>
      </Routes>
    </div>
  )
   
  
}

export default App;
