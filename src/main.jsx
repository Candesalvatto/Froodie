import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer.jsx';
import { BestSellers } from './components/BestSellers.jsx';
import { InfFabric } from './components/InfFabric.jsx';
import { LocationsPoint } from './components/LocationsPoint.jsx';

import { Meet } from './components/Meet.jsx';
import { FormContact } from './components/FormContact.jsx';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path='/como-calentar' element={<Meet/>} />
      <Route path='/puntos-de-venta' element={<LocationsPoint/>} />
      <Route path='/detras-de-froodie' element={<InfFabric/>} />
      <Route path='/productos' element={<BestSellers/>} />
      <Route path='/newsletter' element={<FormContact/>} />
      <Route path='/contacto' element={<Footer/>} />
      <Route path='*' element={<App msg={'ERROR 404 PAGE NOT FOUND'} />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
