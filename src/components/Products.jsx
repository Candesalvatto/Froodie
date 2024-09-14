import Choco from '../../public/src/assets/img/testpostre.png'
import Carne from '../../public/src/assets/img/testcarne.png'
import Wrap from '../../public/src/assets/img/testwrap.png'
import Tarta from '../../public/src/assets/img/testtarta.png'
import Flecha from '../../public/src/assets/img/flecha.png'


export const Products = () => {
  return (
    <div className="products-cont-gral">
            <div className="text-product-h">
          <h1>Explora nuestros productos</h1>
          <h2>Disfruta de la magia de comer rico y sano sin cocinar en tu casa</h2>
        </div>
        
        {/* <div className="container__prod">
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
            </div> */}

            <div className="products-cont-gral7">
              <div className='CARD_CON'>
                                    <div className="CARD7">
                                              <div className='cimg'>
                                              <img src={Carne} alt="Plato Listo" className='CARD_IMG'/>
                                              <img src={Flecha} alt='flecha' className='CARD_FLECHA'/>
                                              <h1 className='CARD_T'>Platos listos</h1>
                                              </div>
                                              <div className='cdetail_'>.
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

                                      </div>
                                    </div>
                                    <div className="CARD7">
                                              <div className='cimg'>
                                              <img src={Wrap} alt="Plato Listo" className='CARD_IMG'/>
                                              <img src={Flecha} alt='flecha' className='CARD_FLECHA'/>
                                              <h1 className='CARD_T'>Wraps</h1>
                                              </div>
                                      <div className='cdetail'>.
                                              <ul>
                                              <li>Vegetales</li>
                                              <li>Vegetales grillados</li>
                                              <li>Carne desmechada y chedar</li>
                                              <li>Jamón y queso</li>
                                              <li>Pollo</li>
                                            </ul>

                                      </div>
                                    </div>                                   
                                     <div className="CARD7">
                                              <div className='cimg'>
                                              <img src={Tarta} alt="Plato Listo" className='CARD_IMG'/>
                                              <img src={Flecha} alt='flecha' className='CARD_FLECHA'/>
                                              <h1 className='CARD_T'>Tartas</h1>
                                              </div>
                                      <div className='cdetail'>.
                                              <ul>
                                              <li>Vegetales</li>
                                              <li>Jamón y queso</li>
                                              <li>Pollo y champignones</li>
                                              <li>Bicolor</li>
                                            </ul>

                                      </div>
                                    </div>                                    <div className="CARD7">
                                              <div className='cimg'>
                                              <img src={Choco} alt="Plato Listo" className='CARD_IMG'/>
                                              <img src={Flecha} alt='flecha' className='CARD_FLECHA'/>
                                              <h1 className='CARD_T'>Postres</h1>
                                              </div>
                                      <div className='cdetail'>.
                                              <ul>
                                              <li>Chocotorta</li>
                                              <li>Postre oreo</li>
                                              <li>Tiramisú</li>
                                              <li>Mousse de naranja</li>
                                            </ul>

                                      </div>
                                    </div>
            </div>
            </div>
    </div>

    
  )
}