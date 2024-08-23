import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import { FormContact } from './components/FormContact';
import { InfFabric } from './components/InfFabric';
import { Experiencies } from './components/Experiencies';
import { BestSellers } from './components/BestSellers';

function App() {


  return (
    <>
    <NavBar/>
    <Banner/>
    <Products/>
    <Experiencies/>
    <InfFabric/>
    <BestSellers/>
    <FormContact/>
    <Footer/>
      
    </>
  )
}

export default App
