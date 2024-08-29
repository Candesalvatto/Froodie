import { useState, useRef } from "react";
import emailjs from 'emailjs-com';
import { Container, Row, Col, Alert} from 'react-bootstrap';


export const FormContact = () => {
    
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); 
  const [showError, setShowError] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const fromName = formData.get('from_name');
    const fromLastName = formData.get('from_lastname');
    const emailId = formData.get('email_id');
    const phoneId = formData.get('phone_id');
    const companyId = formData.get('company_id');
    const message = formData.get('message');

    if (!fromName || !fromLastName || !emailId || !phoneId || !companyId || !message) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return; 
    }

    setIsSending(true);
    setShowError(false);


    const serviceID = 'service_kg836ro';
    const templateID = 'template_y85a84t';
    const userID = 'y7pgvYD58gGTFMvzM';

    emailjs.sendForm(serviceID, templateID, formRef.current, userID)
      .then(() => {
        setIsSending(false);
        formRef.current.reset();
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false);
        }, 4000);
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
            <p>ventas@coolmeals.com.ar</p>
          </Col>

          <Col>
                <div>
                {showSuccess && (
                <Alert variant="success">
                  ¡Tu mensaje ha sido enviado exitosamente!
                </Alert>
              )}
                {showError && (
                <Alert variant="danger">
                  Por favor, completa todos los campos antes de enviar el formulario.
                </Alert>
              )}
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
                      <Col size={12} sm={12} className="px-2">
                        <input type="text" name="company_id" id="company_id" placeholder="Compañía" />
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
