import Baner from '../../public/src/assets/img/top-view-weekle-food-planner-concept_23-2148478196 (1).jpg'
 import Slinte from '../../public/src/assets/img/slinte-yellow.png'

export const Banner = () => {
  return (
    <div className='banner-primary'>
        <div className='banner-secundary'>
            <div className='banner-slinte'>
                <img src={Slinte} alt='slinte'/>
                    <div className='banner-text'>
                    <h1>EN TU MESA Y EN TU CASA</h1>
                    <h2>O EN CUALQUIERA LADO</h2>
                    <h3>Traemos comidas y sabores apetecibles y caseros, listos para cualquier hora y en cualquier lugar</h3>
                    </div>
            </div>
            <div className='banner-img'>
                <img src={Baner} alt='image-banner'/>
            </div>
        </div>
    </div>
  )
}
