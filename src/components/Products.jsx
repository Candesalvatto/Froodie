import Choco from '../../public/src/assets/img/testpostre.png'
import Carne from '../../public/src/assets/img/testcarne.png'
import Wrap from '../../public/src/assets/img/testwrap.png'
import Tarta from '../../public/src/assets/img/testtarta.png'
import Flecha from '../../public/src/assets/img/flecha.png'
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react'




export const Products = () => {

  const [flippedCards, setFlippedCards] = useState([false, false, false, false]);


  const flipCard = (index) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index]; 
    setFlippedCards(newFlippedCards); 
  };


  return (
    <div className="products-cont-gral">
            <div className="text-product-h">
          <h1>Explora nuestros productos</h1>
          <h2>Disfruta de la magia de comer rico y sano sin cocinar en tu casa</h2>
        </div>    
            <div className='flip-gral'>

            <div className='flip-cont'>
            <ReactCardFlip flipDirection='horizontal' isFlipped={flippedCards[0]}>
                                              <div className="CARD7" onClick={() => flipCard(0)}>
                                                <img src={Carne} alt="Plato Listo" className='CARD_IMG'/>
                                              </div>
                                              <div className="CARD8" onClick={() => flipCard(0)}>
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
            </ReactCardFlip>
            <img src={Flecha} alt='flecha' className='CARD_FLECHA'/>
            <h1 className='CARD_T'>Platos listos</h1>
            </div>

            <div className='flip-cont'>
            <ReactCardFlip flipDirection='horizontal' isFlipped={flippedCards[1]}>
                                              <div className="CARD7" onClick={() => flipCard(1)}>
                                                <img src={Wrap} alt="Plato Listo" className='CARD_IMG'/>
                                              </div>
                                              <div className="CARD8" onClick={() => flipCard(1)}>
                                              <ul className='CARD8UL'>
                                              <li>Vegetales</li>
                                              <li>Vegetales grillados</li>
                                              <li>Carne desmechada y chedar</li>
                                              <li>Jamón y queso</li>
                                              <li>Pollo</li>
                                            </ul>
                                              </div>
            </ReactCardFlip>
            <img src={Flecha} alt='flecha' className='CARD_FLECHA'/>
            <h1 className='CARD_T'>Wraps</h1>
            </div>

            <div className='flip-cont'>
            <ReactCardFlip flipDirection='horizontal' isFlipped={flippedCards[2]}>
                                              <div className="CARD7" onClick={() => flipCard(2)}>
                                                <img src={Tarta} alt="Plato Listo" className='CARD_IMG'/>
                                              </div>
                                              <div className="CARD8" onClick={() => flipCard(2)}>
                                              <ul className='CARD8UL'>
                                              <li>Vegetales</li>
                                              <li>Bicolor</li>
                                              <li>Jamón y queso</li>
                                              <li>Pollo y champignones</li>
                                            </ul>
                                              </div>
            </ReactCardFlip>
            <img src={Flecha} alt='flecha' className='CARD_FLECHA'/>
            <h1 className='CARD_T'>Tartas</h1>
            </div>

            <div className='flip-cont'>
            <ReactCardFlip flipDirection='horizontal' isFlipped={flippedCards[3]}>
                                              <div className="CARD7" onClick={() => flipCard(3)}>
                                                <img src={Choco} alt="Plato Listo" className='CARD_IMG'/>
                                              </div>
                                              <div className="CARD8" onClick={() => flipCard(3)}>
                                              <ul className='CARD8UL'>
                                              <li>Chocotorta</li>
                                              <li>Postre oreo</li>
                                              <li>Tiramisú</li>
                                              <li>Mousse de naranja</li>
                                            </ul>
                                              </div>
            </ReactCardFlip>
            <img src={Flecha} alt='flecha' className='CARD_FLECHA'/>
            <h1 className='CARD_T'>Postres</h1>
            </div>

            </div>

    </div>

    
  )
}