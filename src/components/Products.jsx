import Choco from '../../public/src/assets/img/testpostre.png'
import Carne from '../../public/src/assets/img/testcarne.png'
import Wrap from '../../public/src/assets/img/testwrap.png'
import Tarta from '../../public/src/assets/img/testtarta.png'
// import Slinte from '../../public/src/assets/img/Slinte-nude.png'
import Flecha from '../../public/src/assets/img/flecha.png'
import pack from '../../public/src/assets/img/packpastel.png'
import pastel from '../../public/src/assets/img/Packaging Pastel de papas.jpg'
import carne from '../../public/src/assets/img/Packaging Carne braseada con arroz.jpg'
import carre from '../../public/src/assets/img/Packaging Carre de cerdo con pure de batatas.jpg'
import risoto from '../../public/src/assets/img/risoto.jpg'
import carne2 from '../../public/src/assets/img/carneconpure.jpg'
import canelones from '../../public/src/assets/img/canelones.jpg'
import albondigas from '../../public/src/assets/img/Packaging Albondigas a la portugesa con arroz.jpg'
import lasagna from '../../public/src/assets/img/lasagna.jpg'
import pack2 from '../../public/src/assets/img/w-pollo.png'
import wrap1 from '../../public/src/assets/img/Packaging Wrap de carne con cheddar.jpg'
import wrap2 from '../../public/src/assets/img/Packaging Wrap de jamon y queso.jpg'
import wrap3 from '../../public/src/assets/img/Packaging Wrap de pollo.jpg'
import wrap4 from '../../public/src/assets/img/Packaging Wrap de vegetales grillados.jpg'
import wrap5 from '../../public/src/assets/img/Packaging Wrap de vegetales.jpg'
import pack3 from '../../public/src/assets/img/packtarta.png'
import tarta1 from '../../public/src/assets/img/bicolor.png'
import tarta2 from '../../public/src/assets/img/jyqtarta.png'
import tarta3 from '../../public/src/assets/img//vegtartar.png'
import tarta4 from '../../public/src/assets/img/pollotarta.png'
import pack4 from '../../public/src/assets/img/IMG_0463.png'
import chocotorta from '../../public/src/assets/img/receta-chocotorta2.jpg'
import postreOreo from '../../public/src/assets/img/oreo.png'
import mousseNaranja from '../../public/src/assets/img/mousse.jpg'
import tiraisu from '../../public/src/assets/img/tiramisu.png'
import Card from 'react-bootstrap/Card';

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


            <div className='pruebaProductos'>
              <h1>Platos Listos</h1>
            <div className='pruebaProductosDiv'>
                <img src={pack} alt='pack' className='img_pack'/>
                  <div className='pruebaProductosContImg'>
                        <Card className='card_prueba'>
                        <Card.Img variant="top" src={pastel} className='card_pastel'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#C6B4B0' }}>
                        <Card.Title className='card_title_prueba'>Pastel de papas</Card.Title>
                        </Card.Body>
                        </Card>

                        <Card className='card_prueba'>
                        <Card.Img variant="top" src={carne} className='card_pastel'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#A28B87' }}>
                        <Card.Title className='card_title_prueba'>Carne braseada con arroz</Card.Title>
                        </Card.Body>
                        </Card>

                        <Card className='card_prueba'>
                        <Card.Img variant="top" src={carre} className='card_pastel'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#C4B5A1' }}>
                        <Card.Title className='card_title_prueba'>Carre de cerdo con pure de batatas</Card.Title>
                        </Card.Body>
                        </Card>

                        <Card className='card_prueba'>
                        <Card.Img variant="top" src={canelones} className='card_pastel'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#C6B4B0' }}>
                        <Card.Title className='card_title_prueba'>Canelones con salsa</Card.Title>
                        </Card.Body>
                        </Card>

                        <Card className='card_prueba'>
                        <Card.Img variant="top" src={risoto} className='card_pastel'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#A28B87' }}>
                        <Card.Title className='card_title_prueba'>Risoto</Card.Title>
                        </Card.Body>
                        </Card>

                        <Card className='card_prueba'>
                        <Card.Img variant="top" src={carne2} className='card_pastel'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#C4B5A1' }}>
                        <Card.Title className='card_title_prueba'>Carne braseada con cremoso de papas</Card.Title>
                        </Card.Body>
                        </Card>

                        <Card className='card_prueba'>
                        <Card.Img variant="top" src={albondigas} className='card_pastel'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#C6B4B0' }}>
                        <Card.Title className='card_title_prueba'>Albondigas con arroz</Card.Title>
                        </Card.Body>
                        </Card>

                        <Card className='card_prueba'>
                        <Card.Img variant="top" src={lasagna} className='card_pastel'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#A28B87' }}>
                        <Card.Title className='card_title_prueba'>Lasagna</Card.Title>
                        </Card.Body>
                        </Card>

                  </div>
            </div>
            </div>

            <div className='pruebaProductos'>
              <h1>Wraps</h1>
            <div className='pruebaProductosDivWrap'>
                <img src={pack2} alt='pack' className='img_pack'/>
                  <div className='pruebaProductosContImgWrap'>
                        <Card className='card_pruebawrap'>
                        <Card.Img variant="top" src={wrap1} className='card_wrap'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#C6B4B0' }}>
                        <Card.Title className='card_title_prueba'>Carne braseada</Card.Title>
                        </Card.Body>
                        </Card>

                        <Card className='card_pruebawrap'>
                        <Card.Img variant="top" src={wrap2} className='card_wrap'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#A28B87' }}>
                        <Card.Title className='card_title_prueba'>Jamón y queso</Card.Title>
                        </Card.Body>
                        </Card>

                        <Card className='card_pruebawrap'>
                        <Card.Img variant="top" src={wrap3} className='card_wrap'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#C4B5A1' }}>
                        <Card.Title className='card_title_prueba'>Pollo</Card.Title>
                        </Card.Body>
                        </Card>

                        <Card className='card_pruebawrap'>
                        <Card.Img variant="top" src={wrap4} className='card_wrap'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#C6B4B0' }}>
                        <Card.Title className='card_title_prueba'>Vegetales grillados</Card.Title>
                        </Card.Body>
                        </Card>

                        <Card className='card_pruebawrap'>
                        <Card.Img variant="top" src={wrap5} className='card_wrap'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#A28B87' }}>
                        <Card.Title className='card_title_prueba'>Vegetales</Card.Title>
                        </Card.Body>
                        </Card>


                  </div>
            </div>
            </div>



            <div className='pruebaProductos'>
              <h1>Tartas</h1>
            <div className='pruebaProductosDivTarta'>
                <img src={pack3} alt='pack' className='img_pack'/>
                  <div className='pruebaProductosContImgTarta'>

                        <Card className='card_pruebatarta'>
                        <Card.Img variant="top" src={tarta1} className='card_tarta'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#C4B5A1' }}>
                        <Card.Title className='card_title_prueba'>Bicolor</Card.Title>
                        </Card.Body>
                        </Card>

                        <Card className='card_pruebatarta'>
                        <Card.Img variant="top" src={tarta2} className='card_tarta'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#C6B4B0' }}>
                        <Card.Title className='card_title_prueba'>Jamón y queso</Card.Title>
                        </Card.Body>
                        </Card>

                        <Card className='card_pruebatarta'>
                        <Card.Img variant="top" src={tarta3} className='card_tarta'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#C6B4B0' }}>
                        <Card.Title className='card_title_prueba'>Vegetales</Card.Title>
                        </Card.Body>
                        </Card>

                        <Card className='card_pruebatarta'>
                        <Card.Img variant="top" src={tarta4} className='card_tarta'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#A28B87' }}>
                        <Card.Title className='card_title_prueba'>Pollo</Card.Title>
                        </Card.Body>
                        </Card>


                  </div>
            </div>
            </div>


            <div className='pruebaProductos'>
              <h1>Postres</h1>
            <div className='pruebaProductosDivPostre'>
                <img src={pack4} alt='pack' className='img_pack'/>
                  <div className='pruebaProductosContImgPostre'>

                        <Card className='card_pruebaPostres'>
                        <Card.Img variant="top" src={mousseNaranja} className='card_postre'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#C4B5A1' }}>
                        <Card.Title className='card_title_prueba'>Mousse de Naranja</Card.Title>
                        </Card.Body>
                        </Card>

                        <Card className='card_pruebaPostres'>
                        <Card.Img variant="top" src={chocotorta} className='card_postre'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#C6B4B0' }}>
                        <Card.Title className='card_title_prueba'>Chocotorta</Card.Title>
                        </Card.Body>
                        </Card>

                        <Card className='card_pruebaPostres'>
                        <Card.Img variant="top" src={tiraisu} className='card_postre'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#C6B4B0' }}>
                        <Card.Title className='card_title_prueba'>Tiramisu</Card.Title>
                        </Card.Body>
                        </Card>

                        <Card className='card_pruebaPostres'>
                        <Card.Img variant="top" src={postreOreo} className='card_postre'/>
                        <Card.Body className='card_body' style={{ backgroundColor: '#A28B87' }}>
                        <Card.Title className='card_title_prueba'>Postre Oreo</Card.Title>
                        </Card.Body>
                        </Card>


                  </div>
            </div>
            </div>
    </div>
    
  )
}