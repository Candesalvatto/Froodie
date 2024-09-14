import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import { FormContact } from './components/FormContact';
 import { InfFabric } from './components/InfFabric';
import { BestSellers } from './components/BestSellers';
import { Meet } from './components/Meet';
import { LocationsPoint } from './components/LocationsPoint';
import '@animxyz/core'; 
import { useState, useEffect } from 'react';
import { Spinner } from './components/Spinner';


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false); 
      }, 2000); 
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (loading) {
    return <Spinner />;
  }



  return (
    <div id='home'>
    <NavBar/>
    <Banner/>
    <Products/>
    <Meet/>
    <LocationsPoint/>
    <InfFabric />
    <BestSellers />
    <FormContact/>
    <Footer/>
    </div>
  )
}

export default App
