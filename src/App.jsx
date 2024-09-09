import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import { FormContact } from './components/FormContact';
 import { InfFabric } from './components/InfFabric';
// import { Experiencies } from './components/Experiencies';
import { BestSellers } from './components/BestSellers';
import { Meet } from './components/Meet';
import { LocationsPoint } from './components/LocationsPoint';
import '@animxyz/core'; 
import { useState, useEffect } from 'react';
import { Spinner } from './components/Spinner';


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga de recursos o espera de la carga completa
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false); // Simula que todo está cargado
      }, 2000); // Puedes ajustar el tiempo de carga simulado
    };

    // Escuchar el evento de carga completa del DOM
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
    // Mostrar el spinner mientras la página está cargando
    return <Spinner />;
  }



  return (
    <>

    <NavBar/>
    <Banner/>
    <Products/>
    <Meet/>
    {/* <Experiencies/> */}
    <InfFabric/>
    <LocationsPoint/>
    <BestSellers/>
    <FormContact/>
    <Footer/>
      
    </>
  )
}

export default App
