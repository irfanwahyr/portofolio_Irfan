import './App.css';
import React, {useState} from 'react';
import Splash from './LandingPage/splash_screen';
import LandingPage from './LandingPage/landing_page';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashLoaded = () => {
    setShowSplash(true);
  };

return(
  <div className='App'>
    {showSplash ? (
        <Splash onLoaded={handleSplashLoaded}/>
      ) : (
        <LandingPage/>
      )
    }
    </div>
  );
}

export default App;
