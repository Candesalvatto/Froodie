import Choco from '../../public/src/assets/img/postre2.webp'
import Carne from '../../public/src/assets/img/albond.webp'
import Wrap from '../../public/src/assets/img/wrap1.webp'
import Tarta from '../../public/src/assets/img/tarta2.webp'
import Flecha from '../../public/src/assets/img/flecha.webp'
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Products = () => {

  const [flippedCards, setFlippedCards] = useState([false, false, false, false]);


  const flipCard = (index) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index]; 
    setFlippedCards(newFlippedCards); 
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: false,
    variableWidth: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="products-cont-gral">
            <div className="text-product-h">
          <h1>Explorá nuestros productos</h1>
          <h2>Disfrutá de la magia de comer rico y sano sin cocinar en tu casa</h2>
        </div>    
            <div className='flip-gral'>
            <Slider {...settings}>
            <div className='flip-cont'>
            <ReactCardFlip flipDirection='horizontal' isFlipped={flippedCards[0]}>
                                              <div className="CARD7" onClick={() => flipCard(0)}>
                                                <img src={Carne} alt="Plato Listo" className='CARD_IMG'/>
                                              </div>
                                              <div className="CARD8" onClick={() => flipCard(0)}>
                                              <ul translate="no">
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
            <h1 className='CARD_T' translate="no">Platos listos</h1>
            </div>

            <div className='flip-cont'>
            <ReactCardFlip flipDirection='horizontal' isFlipped={flippedCards[1]}>
                                              <div className="CARD7" onClick={() => flipCard(1)}>
                                                <img src={Wrap} alt="Wrap" className='CARD_IMG'/>
                                              </div>
                                              <div className="CARD8" onClick={() => flipCard(1)}>
                                              <ul className='CARD8UL' translate="no">
                                              <li>Vegetales</li>
                                              <li>Vegetales grillados</li>
                                              <li>Carne desmechada y chedar</li>
                                              <li>Jamón y queso</li>
                                              <li>Pollo</li>
                                            </ul>
                                              </div>
            </ReactCardFlip>
            <img src={Flecha} alt='flecha' className='CARD_FLECHA'/>
            <h1 className='CARD_T' translate="no" >Wraps</h1>
            </div>

            <div className='flip-cont'>
            <ReactCardFlip flipDirection='horizontal' isFlipped={flippedCards[2]}>
                                              <div className="CARD7" onClick={() => flipCard(2)}>
                                                <img src={Tarta} alt="Tartas" className='CARD_IMG'/>
                                              </div>
                                              <div className="CARD8" onClick={() => flipCard(2)}>
                                              <ul className='CARD8UL' translate="no">
                                              <li>Vegetales</li>
                                              <li>Bicolor</li>
                                              <li>Jamón y queso</li>
                                              <li>Pollo y champignones</li>
                                            </ul>
                                              </div>
            </ReactCardFlip>
            <img src={Flecha} alt='flecha' className='CARD_FLECHA'/>
            <h1 className='CARD_T' translate="no">Tartas</h1>
            </div>

            <div className='flip-cont'>
            <ReactCardFlip flipDirection='horizontal' isFlipped={flippedCards[3]}>
                                              <div className="CARD7" onClick={() => flipCard(3)}>
                                                <img src={Choco} alt="Postres" className='CARD_IMG'/>
                                              </div>
                                              <div className="CARD8" onClick={() => flipCard(3)}>
                                              <ul className='CARD8UL' translate="no">
                                              <li>Chocotorta</li>
                                              <li>Postre oreo</li>
                                              <li>Tiramisú</li>
                                              <li>Mousse de naranja</li>
                                            </ul>
                                              </div>
            </ReactCardFlip>
            <img src={Flecha} alt='flecha' className='CARD_FLECHA'/>
            <h1 className='CARD_T' translate="no">Postres</h1>
            </div>
            </Slider>
            </div>
    </div>

    
  )
}