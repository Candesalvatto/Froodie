import Choco from '../../public/src/assets/img/choco.png'
import Carne from '../../public/src/assets/img/carne.png'
import Wrap from '../../public/src/assets/img/wrap1.png'
import Tarta from '../../public/src/assets/img/tarta.png'
import Slinte from '../../public/src/assets/img/Slinte-nude.png'
import Flecha from '../../public/src/assets/img/flecha.png'

export const Products = () => {
  return (
    <div className="products-cont-gral">
        <div className="text-product-h">
          <h1>Explora nuestros productos</h1>
          <h2>Disfruta de la magia de comer rico y sano sin cocinar en tu casa</h2>
        </div>
        <div className="container__prod">
          <div className="cont_prod_cat">
            <img src={Slinte} alt="Slinte" className='prod_slinte_nude'/>
            <img src={Flecha} alt='flecha' className='prod_flecha'/>
            <img src={Carne} alt="Plato Listo" className='prod_img_catg'/>
          </div>
          <div className="cont_prod_cat">
            <img src={Slinte} alt="Slinte" className='prod_slinte_nude' />
            <img src={Flecha} alt='flecha' className='prod_flecha'/>
            <img src={Wrap} alt="Wraps" className='prod_img_catg'/>
          </div>
          <div className="cont_prod_cat">
          <img src={Slinte} alt="Slinte" className='prod_slinte_nude'/>
          <img src={Flecha} alt='flecha' className='prod_flecha'/>
            <img src={Tarta} alt="Tartas" className='prod_img_catg'/>
          </div>
          <div className="cont_prod_cat">
          <img src={Slinte} alt="Slinte" className='prod_slinte_nude'/>
          <img src={Flecha} alt='flecha' className='prod_flecha'/>
            <img src={Choco} alt="Postres" className='prod_img_catg'/>
          </div>
        </div>
        <div className='cont__h3__cat'>
        <div className='h3__cat'>
            <h3>Platos listos</h3>
            </div>
            <div className='h3__cat'>
            <h3>Wraps</h3>
            </div>
            <div className='h3__cat'>
            <h3>Tartas</h3>
            </div>
            <div className='h3__cat'>
            <h3>Postres</h3>
            </div>
            </div>

    </div>
  )
}
