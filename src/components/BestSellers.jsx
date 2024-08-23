import Card from 'react-bootstrap/Card';
import Carre from '../../public/src/assets/img/carre.jpg'
import PolloWrap from '../../public/src/assets/img/pollowrap.jpg'
import Pastel from '../../public/src/assets/img/pastel.jpg'
import { Clock } from 'react-bootstrap-icons';
import { InfoCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

export const BestSellers = () => {
  return (
    <div className="bests-sellers-cont-gral">
        <div className="best__h">
            <h1>CONOCÉ NUESTROS PRODUCTOS MÁS POPULARES</h1>
            <h2>Favoritos destacados</h2>
        </div>
        <div className="cards_best_cont">
                <Card className='card_best_seller'>
            <Card.Img variant="top" src={Carre} className='img_best' />
            <Card.Body>
                <Card.Title className='title_b_s'>Carré de cerdo a la mostaza y miel con puré de batatas</Card.Title>
                    <div className='cook_cont_'>
                    <Button>
                    <Clock  className='clock-icon'/> 
                    <p>7 MINUTOS</p>   
                    </Button>
                    <Button className='button_b2'>
                    <InfoCircle className='clock-icon'/> 
                    <p>300 GRAMOS</p>   
                    </Button>
                    </div>
            </Card.Body>
            </Card>

    <Card className='card_best_seller'>
      <Card.Img variant="top" src={PolloWrap} className='img_best' />
      <Card.Body>
        <Card.Title className='title_b_s'>Wrap de pollo</Card.Title>
        <div className='cook_cont_'>
        {/* <Card.Text className='inf_cook'> 
        <Clock size={15} color="black"  className='clock-icon'/>
        <p>5 MINUTOS</p>
        </Card.Text>
        <Card.Text className='inf_cook'> 
        <InfoCircle size={15} color="black" />
        <p>210 GRAMOS</p>
        </Card.Text> */}
        <Button>
                    <Clock  className='clock-icon'/> 
                    <p>5 MINUTOS</p>   
                    </Button>
                    <Button className='button_b2'>
                    <InfoCircle className='clock-icon'/> 
                    <p>210 GRAMOS</p>   
                    </Button>
        </div>
      </Card.Body>
    </Card>

    <Card className='card_best_seller'>
      <Card.Img variant="top" src={Pastel} className='img_best' />
      <Card.Body>
        <Card.Title className='title_b_s'>Pastel de papas</Card.Title>
        <div className='cook_cont_'>
        <Button>
                    <Clock  className='clock-icon'/> 
                    <p>7 MINUTOS</p>   
                    </Button>
                    <Button className='button_b2'>
                    <InfoCircle className='clock-icon'/> 
                    <p>400 GRAMOS</p>   
                    </Button>
        </div>
      </Card.Body>
    </Card>
        </div>
    </div>
  )
}
