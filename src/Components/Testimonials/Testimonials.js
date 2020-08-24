import React from "react";
import { Card, Col, Modal, Button, Jumbotron, Row } from "react-bootstrap";

import "../../Components/Testimonials/Testimonials.scss";

const Testimonials = () => (
  <Col>
    <Jumbotron className="bg-transparent text-white copy__text">
      <h1>Últimas Horas com 50% de desconto</h1>
      <h2>R$ 197,00</h2>
      <small>Á vista ou 12x de</small>
      <h2>R$19,19</h2>
      <ul className="p-0">
        <ol>✔Acesso vitalício ao curso</ol>
        <ol>✔Grupo Vip de Suporte com os top afiliados</ol>
        <ol>✔Todas a atualizações sem custo algum !</ol>
        <ol>✔Garantia de 7 dias não gostou ? Devolvemos o seu dinheiro !</ol>
      </ul>

      <App />
    </Jumbotron>
  </Col>
);
export default Testimonials;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="Testimonials "
    >
      <Modal.Body>
        <section className="text-white px-4 text-center">
          <h2>VEJA COMO ESTÃO OS NOSSOS ALUNOS</h2>
          <p>
            Se você assim como eles que depor, é so clicar no botão Depor a
            baixo, nossa equipe analisará e colocará no quadro de depoimentos.
          </p>
        </section>
        <Row className=" d-flex justify-content-center align-items-center" xs={12} md={8} lg={8}>
          <Card style={{ width: "18rem" }} className="m-4">
            <iframe
              src="https://www.youtube.com/embed/HchA5TG1mSo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="depo-e"
            ></iframe>

            <Card.Body className='bg-warning'>
              <Card.Title >Aluno</Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className="m-4">
            <iframe
              src="https://www.youtube.com/embed/HOWAJxF45vk"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="depo-d"
            ></iframe>

            <Card.Body className='bg-warning'>
              <Card.Title>Aluno</Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className="m-4">
            <iframe
              src="https://www.youtube.com/embed/knoq2PZr-AE"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="depo-c"
            ></iframe>

            <Card.Body className='bg-warning'>
              <Card.Title>Aluno</Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className="m-4">
            <iframe
              src="https://www.youtube.com/embed/km-LlqSv7RI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="depo-b"
            ></iframe>

            <Card.Body className='bg-warning'>
              <Card.Title>Aluno</Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between modal-body">
        <Button
          variant="warning text-white rounded-pill"
          className="m-2 px-5"
          onClick={props.onHide}
        >
          Depor
        </Button>
        <a href='https://pay.hotmart.com/F21722188U?checkoutMode=10'>
        <Button
          variant="warning text-white rounded-pill"
          className="m-2 px-5"
          onClick={props.onHide}
        >
          Garantir
        </Button>
        </a>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="warning text-white rounded-pill"
        className="m-2"
        onClick={() => setModalShow(true)}
      >
        Saiba Mais
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
