import { useState, useRef } from "react";
import emailjs from 'emailjs-com';
import { Container, Row, Col} from 'react-bootstrap';



export const FormContact = () => {

    
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);

    const serviceID = 'default_service';
    const templateID = 'template_sy3a2u8';
    const userID = '1OGts2RANcB0Nyq8A';

    emailjs.sendForm(serviceID, templateID, formRef.current, userID)
      .then(() => {
        setIsSending(false);
        // Swal.fire({
        //   position: 'top-end',
        //   icon: 'success',
        //   title: '¡Mensaje enviado con éxito!',
        //   showConfirmButton: false,
        //   timer: 1500,
        //   customClass: {
        //     popup: 'my-swal-popup', // Clase para el contenedor del mensaje
        //     title: 'my-swal-title', // Clase para el título del mensaje
        //     confirmButton: 'my-swal-button',
        //     icon: 'my-swal-icon'
        //   }
        // });
      })
      .catch((err) => {
        setIsSending(false);
        alert(JSON.stringify(err));
      });
  };

  return (
    <div className='cont-form-gral'>

      <Container className='letter'>
        <Col className="align-items-center">
          <Col className='letter-1'>
            <h1>Contacto</h1>
            <h2>¿Interesado en nuestra marca? ¿Tiene preguntas sobre cocina, ingredientes o abastecimiento? ¿Consultas de precios? Háganoslo saber completando el formulario a continuación o contáctenos en</h2>
            <p>info@froodie.com</p>
          </Col>

          <Col>
                <div>
                  <form ref={formRef} onSubmit={sendEmail} id="form">
                    <Row>
                      <Col  className="px-2">
                        <input type="text" name="from_name" id="from_name" placeholder="Nombre" />
                      </Col>
                      <Col  className="px-2">
                        <input type="text" name="from_lastname" id="from_lastname" placeholder="Apellido" />
                      </Col>
                      <Col size={12} sm={12} className="px-2">
                        <input type="email" name="email_id" id="email_id" placeholder="Correo electrónico" />
                      </Col>
                      <Col size={12} sm={12} className="px-2">
                        <input type="tel" name="phone_id" id="phone_id" placeholder="Teléfono" />
                      </Col>
                      <Col size={12} className="px-2">
                        <textarea rows="4" name="message" id="message" placeholder="Mensaje"></textarea>
                        <button type="submit" disabled={isSending}>
                          {isSending ? 'Enviando...' : 'Enviar'} 
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              

          </Col>
        </Col>
      </Container>


    </div>
  )
}
