import React from "react";
import { Carousel, Col } from "react-bootstrap";
import ImgOne from "../../assets/img/carrousel_bg.jpeg";
import ImgTwo from "../../assets/img/carrousel_bg_two.jpeg";
import ImgThree from "../../assets/img/carrousel_bg_three.jpeg";
import ImgFour from "../../assets/img/carousel_bg_four.jpg";


import "../../Components/Carousel/Carousel.scss";

const Carou = () => (
  <div>
    <Carousel className="Im">
      <Carousel.Item>
        <img className="d-block w-100 width" src={ImgOne} alt="First slide" />

        <Carousel.Caption className="text_all" xm={12} >
          <Col className="text_all mb-5" lg={8}>
            <h3 className="display-4 text-warning">
              Curso completo 100% online
            </h3>
            <p className="font-weight-bold">
              MAIS DE 20 VÍDEO-AULAS ONLINE SEMPRE ATUALIZADAS COM TÉCNICAS E
              ESTRATÉGIAS NOVAS. NADA DE AULAS CHATAS E EXTENSAS. APRENDA SE
              DIVERTINDO!
            </p>
          </Col>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 width" src={ImgTwo} alt="Third slide" />

        <Carousel.Caption className="text_all">
          <Col className="text_all" lg={8}>
            <h3 className="display-4  text-warning">Assista quando quiser</h3>
            <p className="font-weight-bold">
              ACESSO VITALÍCIO AO CURSO. PODERÁ ASSISTIR QUANDO E ONDE QUISER,
              ATRAVÉS DO CELULAR OU PC COM INTERNET. AULAS COM MATERIAIS
              COMPLEMENTARES PARA AUXÍLIO NO ENTENDIMENTO.
            </p>
          </Col>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100  width" src={ImgThree} alt="bg-c" />

        <Carousel.Caption className="text_all">
          <Col className="text_all" lg={8}>
            <h3 className="display-4  text-warning">Iniciante ou experiente</h3>
            <p className="font-weight-bold">
              {" "}
              TÉCNICAS DE VENDAS PARA AFIlIADOS INICIANTES OU EXPERIENTES. SEM
              PISTAS FALSAS, NÓS ENSINAMOS O QUE MUITOS SE RECUSAM A ENSINAR
              ATRAVÉS DA INTERNET.
            </p>
          </Col>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img className="d-block w-100  width" src={ImgFour} alt="Third slide" />

        <Carousel.Caption className="text_all">
          <Col className="text_all" lg={8}>
            <h3 className="display-4  text-warning">
              Conheça as melhores estratégias
            </h3>
            <p className="font-weight-bold">
              {" "}
              APRENDA COMO FUNCIONA O MERCADO DIGITAL, POR QUE ELE É TÃO BOM E
              QUAL O MINDSET QUE VOCÊ PRECISARÁ TER PARA COMEÇAR A EMPREENDER.
            </p>
          </Col>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Carou;
