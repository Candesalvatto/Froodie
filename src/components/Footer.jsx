import Logo from '../../public/src/assets/img/logo-froodie-blanco-sin-fondo.webp'
import ico_insta from '../../public/src/assets/img/instagram.png'
import linea from '../../public/src/assets/img/linea.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footer-cont-gral' id='contacto'>
      <div className='cont_footer w-100 '>
      <Row>
        <Col xs={5} className=' C-1 d-flex flex-column  '>
        <a href='/'><img src={Logo} alt="logoFroodie"/></a>
        <a href="#sobre-nosotros">Sobre Nosotros</a>
        <a href="#productos">Nuestros Productos</a>
        <a href="#contacto">Contáctanos</a>
        </Col>


        <Col xs={5} className='C-2 d-flex flex-column  '>
            <h1>¡Seguinos en nuestras redes sociales!</h1>
                <div className='social_co_i2'>
                  <img src={ico_insta} alt='instagram' className='social_co_INST'  />
                  <a href='https://www.instagram.com/froodie.ar/' target='blanck'>@froodie.ar</a>
                </div>
            <img src={linea} alt=''/>
                  <div className='distr_inf'>
                  <h2>Si estás interesado en ser distribuidor escribinos a</h2>
                  <p>ventas@coolmeals.com.ar</p>
                  </div>
        </Col>   
        </Row>


        <Row className='C-3'>
        <div className='pol_con'>
        <Link to="/politica-privacidad">Condiciones de uso</Link>
        <Link to="/politica-privacidad">Politica de privacidad</Link>
        </div>
        <span>©2024 Froodie. Todos los derechos reservados.</span>
        </Row>
      </div>
    </div>
  )
}
