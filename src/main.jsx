import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import { NotFound } from './components/NotFound.jsx';
import  {PrivaciPolitic}  from './components/PrivaciPolitic.jsx';



createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path='/politica-privacidad' element={ <PrivaciPolitic/>} />
      <Route path='/*' element={ <NotFound/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
