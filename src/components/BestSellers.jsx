import Card from 'react-bootstrap/Card';
import { Clock } from 'react-bootstrap-icons';
import { InfoCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../database/firebaseConfig';

export const BestSellers = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Intentando conectar a Firestore...');
        const productsRef = collection(db, 'productos');
        const snapshot = await getDocs(productsRef);
        console.log('Colección seleccionada:', productsRef.path);
        console.log('Conectado correctamente');
        const fetchedProducts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProducts();
  }, []);
console.log(products)
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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
    <div className="bests-sellers-cont-gral" id="productos">
        <div className="best__h">
        <h2>¿Cuál es tu preferido?</h2>
            <h1>DESLIZÁ PARA CONOCER TODOS NUESTROS PRODUCTOS</h1>
        </div>

        <div className="cards_best_cont2">
        <Slider {...settings}>
        {products.map(product => (
                <Card className='card_best_seller' key={product.id}>
            <Card.Img variant="top" src={product.img} className='img_best' loading="lazy" />
            <Card.Body>
                <Card.Title className='title_b_s'>{product.nombre}</Card.Title>
                    <div className='cook_cont_'>
                    <Button>
                    <Clock  className='clock-icon'/> 
                    <p>{product.tiempo} MINUTOS</p>   
                    </Button>
                    <Button className='button_b2'>
                    <InfoCircle className='clock-icon'/> 
                    <p>{product.peso} GRAMOS</p>   
                    </Button>
                    </div>
            </Card.Body>
            </Card>
  ))}
    </Slider>
        </div>
    </div>

  )
}
