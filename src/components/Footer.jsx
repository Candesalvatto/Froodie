import Logo from '../../public/src/assets/img/logo-froodie-blanco-sin-fondo.png'
import ico_insta from '../../public/src/assets/img/instagram.png'
import linea from '../../public/src/assets/img/linea.png'

export const Footer = () => {
  return (
    <div className='footer-cont-gral'>
      <div className='cont_footer'>
        <img src={Logo} alt="logoFroodie"/>
        <a href=""></a>
        <a href="">Sobre Nosotros</a>
        <a href="">Best Sellers</a>
        <a href="">Envios y devoluciones</a>
        <a href="">Preguntas frecuentes</a>
        <a href="">Contáctenos</a>
        <a href="">Encuéntrenos</a>
      </div>
      <div className="copyrigth">
        <div className='pol_con'>
        <a href="">Condiciones de uso</a>
        <a href="">Política de privacidad</a>
        </div>
        <span>©2024 Froodie. Todos los derechos reservados.</span>
        </div>
      <div className='social_co'>
        <h1>¡Síguenos en nuestras redes sociales!</h1>
        <img src={linea} alt=''/>
        <div className='social_co_i'>
          <img src={ico_insta} alt='instagram'/>
          <p>@froodie.ar</p>
        </div>
      </div>

    </div>
  )
}
