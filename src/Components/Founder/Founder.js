import React from "react";
import { Col, Image, Button, Card, Accordion } from "react-bootstrap";
import Jao from "../../assets/img/jaovitor_foto.jpg";
import "../../Components/Founder/Founder.scss";

const Founder = () => (
  <Col className=" p-0 my-5">
    <Col className="founder__Container m-0 text-white">
      <h4>Fundador</h4>
      <Col className="d-flex flex-column align-items-center justify-content-center mt-5">
        <h3>Conheça o fundador do método Seja Milionário.</h3>
        <h5>João Vitor</h5>
        <Image
          src={Jao}
          className="border border-warning rounded-circle my-3"
        />
        <h6>Opa! Prazer me chamo João e trabalho a mais de 2 anos com vendas pela internet!</h6>
      </Col>
    </Col>

    <Accordion defaultActiveKey="0">
      <Card className="founder">
        <Card.Header lg={6}>
          <Accordion.Toggle as={Button} className="bg-warning " eventKey="1">
            Saiba mais
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <p>decidi criar o método sejamilionario depois de ter consigo faturar mais de 6 dígitos trabalhando no conforto da minha casa usando apenas o meu celular todos os dias milhões de pessoas saem pra trabalhar nos empregos que não gostam, pega ônibus, trens tudo lotado, e lotado principalmente de mais pessoas infelizes Hoje em dia funciona assim: Você trabalha em uma coisa que não gosta pra ganhar dinheiro e realizar todos os seus sonhos pensando dessa forma até que é bom Mas na prática isso não acontece porque você trabalha bem mais do que deveria além de ganhar bem menos do que você merece isso não é culpa sua,na verdade isso é introduzido na nossa cabeça desde de criança, crescemos sabendo que tudo vai ser muito difícil,o dinheiro vai ser pouco etc... Quando você está dentro disto é muito difícil de sair </p>
            <strong>Quando você está dentro disto é muito difícil de sair</strong>
            <p>Por mais que você faça de tudo, procura emprego, busca especialização, faz cursos e mesmo assim não sai do lugar, fica naquela mesmice de sempre e esse caminho que você está seguindo vai te levar pra esses 3 problemas</p>
            <ul>
              <ol>1 - Você se sente infeliz</ol>
              <ol>2 - Se sente incapaz</ol>
              <ol>3 - Não realiza os seus sonhos</ol>
            </ul>
            <strong>Mas fala a verdade : Essa é a vida que você quer mesmo?</strong>
            <p>Eu sei que a sua resposta foi não ... Mas eu quero te dar uma oportunidade de mudar isso e só você pode promover essa mudança nos últimos anos eu já ajudei mais de 2.000 pessoas a faturar de R$ 100 a R$ 300 por dia com um método muito simples de fazer Posso te ajudar a alcançar os mesmos resultados dos meus alunos e você pode finalmente poder conquistar os seus sonhos.</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </Col>
);

export default Founder;
