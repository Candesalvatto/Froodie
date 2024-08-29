// import Carousel from 'react-bootstrap/Carousel';
// import Horno from '../../public/src/assets/img/hornocook.jpg'
// import Microondas from '../../public/src/assets/img/micro.jpg'
// import Sarten from '../../public/src/assets/img/sarten.jpg'
// import flecha from '../../public/src/assets/img/fleha-verde.png'
import ico_sarten from '../../public/src/assets/img/sarten.png'
import ico_micro from '../../public/src/assets/img/microonda.png'
import ico_horno from '../../public/src/assets/img/horno.png'


export const Meet = () => {
  return (
    <div className="meet-cont-gral">
        <div className="meet_container">
          {/* <div className='carou_h'>
            <h1>Cómo calentar tu Froodie</h1>
            <h2>Quitar del freezer, puedes desjarlo descongelar o usar elementos de tu cocina. El envase es apto para microondas, no te preocupes!</h2>
          </div>
            <img src={flecha} alt='flecha' className='flecha_green'/>
            <Carousel data-bs-theme="dark" className='cont_car' indicators={false}  >
                <Carousel.Item className='carousel_item'>
                <img src={Horno} alt="Horno" className='carousel_img'/>
                <div className='text_car'>
                <h3>Horno</h3>
                <p>Sacar el producto del envase original y llevar al horno precalentado a 180º por 9 a 12 minutos</p>
                </div>
                </Carousel.Item>

                <Carousel.Item className='carousel_item'>
                <img src={Microondas} alt="Horno" className='carousel_img'/>
                <div className='text_car'>
                <h3>Microondas</h3>
                <p>Llevar directamente al microondas en su envase original, con el film cerrado. Calentar de 5 a 7 minutos</p>
                </div>
                </Carousel.Item>

                <Carousel.Item className='carousel_item'>
                <img src={Sarten} alt="Horno" className='carousel_img'/>
                <div className='text_car'>
                <h3>Sartén</h3>
                <p>Después de pasar el producto 2 minutos por el microondas, colocarlo en una sarten a fuego medio/fuerte y calentar hasta que el queso este derretido</p>
                </div>
                </Carousel.Item>


    </Carousel> */}
        </div>
        <div className='cont_cook'>
          <div className='cook_inst'>
            <div className='h_co'>
              <h1>Cómo calentar tu Froodie</h1>
              <h2>Quitar del freezer, puedes desjarlo descongelar o usar elementos de tu cocina. El envase es apto para microondas, no te preocupes!</h2>
            </div>

            <div className='dv_co'>
              <div className='dv_3'>
                <img src={ico_horno} alt='icono'/>
                <h3>Horno</h3>
                <h4>Sacar el producto del envase original y llevar al horno precalentado a 180º por 9 a 12 minutos</h4>
              </div>

              <div className='dv_3'>
              <img src={ico_micro} alt='icono'/>
                <h3>Microondas</h3>
                <h4>Llevar directamente al microondas en su envase original, con el film cerrado. Calentar de 5 a 7 minutos</h4>
              </div>

              <div className='dv_3'>
              <img src={ico_sarten} alt='icono'/>
                <h3>Sartén</h3>
                <h4>Después de pasar el producto 2 minutos por el microondas, colocarlo en una sarten a fuego medio/fuerte y calentar hasta que el queso este derretido</h4>
              </div>

            </div>

          </div>
        </div>
    </div>
  )
}
