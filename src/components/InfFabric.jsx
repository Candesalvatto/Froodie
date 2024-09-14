import Slinte from '../../public/src/assets/img/slinte-yellow.png'
import Fabric from '../../public/src/assets/img/HRTSY84.jpg'

export const InfFabric = () => {
  return (
    <div className="cont-cool-gral" id='sobre-nosotros'>
        <div className="fab-col">
            <div className="text-fab">
                <h1>Detrás de Froodie</h1>
                <h2>Utilizamos tecnología de vanguardia en nuestros procesos para garantizar alimentos de calidad internacional. Nuestro objetivo es estar a la evolución de la industria, brindando platos listos y congelados, de alta calidad, adaptados a las necesidades del mercado argentino y latinoamericano.</h2>
            <button onClick={() => window.open('https://www.coolmeals.com.ar/productos', '_blank')}>MÁS INFORMACIÓN</button>
            </div>
            
            <div className='img-fab'>
                <img src={Slinte} alt="slinte" className='slinte' />
                <img src={Fabric} alt="fabric" className='fabric' />
            </div>
        </div>
    </div>
  )
}

