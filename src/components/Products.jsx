import Choco from '../../public/src/assets/img/testpostre.png'
import Carne from '../../public/src/assets/img/testcarne.png'
import Wrap from '../../public/src/assets/img/testwrap.png'
import Tarta from '../../public/src/assets/img/testtarta.png'
// import Slinte from '../../public/src/assets/img/Slinte-nude.png'
import Flecha from '../../public/src/assets/img/flecha.png'

export const Products = () => {
  return (
    <div className="products-cont-gral">
        {/* <div className="text-product-h">
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
            </div> */}



            <div className="text-product-h">
          <h1>Explora nuestros productos</h1>
          <h2>Disfruta de la magia de comer rico y sano sin cocinar en tu casa</h2>
          {/* <div className='hh'>
          <h2>Disfruta</h2>
          <h3>de la magia de</h3>
          </div>
          <div className='hh2'>
          <h2>comer rico y sano </h2>
          <h3>sin cocinar en tu casa</h3>
          </div> */}
        </div>
        
        <div className="container__prod">
          <div className="cont_prod_cat2">
            <ul>
              <li>Albóndigas a la portuguesa con arroz</li>
              <li>Carré de cerdo con puré de batatas</li>
              <li>Pastel de papas</li>
              <li>Risotto</li>
              <li>Carne braseada con cremoso de papas</li>
              <li>Carne braseada con arroz</li>
              <li>Lasagna de jamón y queso</li>
              <li>Canelones de verdura y carne</li>
            </ul>
            <img src={Carne} alt="Plato Listo" className='prod_slinte_nude2'/>
            <img src={Flecha} alt='flecha' className='prod_flecha'/>
          </div>
          <div className="cont_prod_cat3">
          <ul>
              <li>Vegetales</li>
              <li>Vegetales grillados</li>
              <li>Carne desmechada y chedar</li>
              <li>Jamón y queso</li>
              <li>Pollo</li>
            </ul>
            <img src={Wrap} alt="Slinte" className='prod_slinte_nude3' />
            <img src={Flecha} alt='flecha' className='prod_flecha'/>
          </div>
          <div className="cont_prod_cat3">
          <ul>
              <li>Vegetales</li>
              <li>Jamón y queso</li>
              <li>Pollo</li>
            </ul>
            <img src={Tarta} alt="Tartas" className='prod_slinte_nude3'/>
            <img src={Flecha} alt='flecha' className='prod_flecha'/>
          </div>
          <div className="cont_prod_cat3">
          <ul>
              <li>Chocotorta</li>
              <li>Postre oreo</li>
              <li>Tiramisú</li>
              <li>Mousse de naranja</li>
            </ul>
            <img src={Choco} alt="Postres" className='prod_slinte_nude3'/>
            <img src={Flecha} alt='flecha' className='prod_flecha'/>
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