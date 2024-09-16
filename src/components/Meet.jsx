import ico_sarten from '../../public/src/assets/img/sarten.webp'
import ico_micro from '../../public/src/assets/img/microonda.webp'
import ico_horno from '../../public/src/assets/img/horno.webp'


export const Meet = () => {
  return (
    <div className="meet-cont-gral">
        <div className='cont_cook'>
          <div className='cook_inst'>
            <div className='h_co'>
              <h1>Cómo calentar tu Froodie</h1>
              <h2>Quitar del freezer, puedes dejarlo descongelar o usar elementos de tu cocina. El envase es apto para microondas, no te preocupes!</h2>
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
