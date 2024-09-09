import Logo from '../../public/src/assets/img/logo-froodie-blanco-sin-fondo.png'
import ico_insta from '../../public/src/assets/img/instagram.png'
import linea from '../../public/src/assets/img/linea.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = () => {
  return (
    <div className='footer-cont-gral'>
      <div className='cont_footer w-100 '>
      <Row>
        <Col xs={6} className='C-1 d-flex flex-column w-50 '>
        <img src={Logo} alt="logoFroodie"/>
        <a href=""></a>
        <a href="">Sobre Nosotros</a>
        <a href="">Best Sellers</a>
        <a href="">Preguntas frecuentes</a>
        <a href="">Contáctenos</a>
        <a href="">Encuéntrenos</a>
        </Col>


        <Col xs={6} className='C-2 d-flex flex-column w-50 '>
            <h1>¡Síguenos en nuestras redes sociales!</h1>
            <div className='social_co_i'>
              <img src={ico_insta} alt='instagram'/>
              <a href='https://www.instagram.com/froodie.ar/'>@froodie.ar</a>
            </div>
            <img src={linea} alt=''/>
            <div className='distr_inf'>
            <h2>Si estás interesado en ser distribuidor escríbenos a</h2>
            <p>ventas@coolmeals.com.ar</p>
            </div>
        </Col>   
        </Row>


        <Row className='C-3'>
        <div className='pol_con'>
        <a href="">Condiciones de uso</a>
        <a href="">Política de privacidad</a>
        </div>
        <span>©2024 Froodie. Todos los derechos reservados.</span>
        </Row>
      </div>
    </div>
  )
}
