import React from "react";
import { Row, Col, Button, Nav, Image } from "react-bootstrap";
import "../Hero/Hero.scss";
import internet from "../../assets/icons/internet.svg";
import money from "../../assets/icons/money.svg";
import decisions from "../../assets/icons/decisions.svg";
import phone from "../../assets/icons/phone.svg";
import boss from "../../assets/icons/boss.svg";
import time from "../../assets/icons/time.svg";

const Hero = () => (
  <section className="">
    <Col className="Hero_handle mt-5">
      <Row className="d-flex align-items-center Hero_container mb-5 ">
        <iframe
          className="border border-warning rounded m-3"
          width="498"
          height="298"
          src="https://www.youtube.com/embed/Bj-0JSAWw7g"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          title="video-a"
          allowfullscreen
        ></iframe>

        <Col className="text_all" lg={6}>
          <h5 className="mt-3 text-white">
            ATENÇÃO: ASSISTA AGORA E VEJA A OPORTUNIDADE DE TRABALHAR POR CONTA
            PRÓPRIA NA INTERNET USANDO APENAS O SEU CELULAR!
          </h5>
          <p className="pr">
            PODENDO FATURAR DE R$ 100 A R$ 300 POR DIA BASTA TER UM CELULAR COM
            CONEXÃO COM A INTERNET ASSISTA O VIDEO, E FAÇA PARTE DAS 10 MIL
            PESSOAS QUE MUDARAM DE VIDA COM VENDAS PELA INTERNET, CLIQUE NO
            BOTÃO E VENHA FAZER PARTE DESSA ENORME COMUNIDADE QUE CADA VEZ MAIS
            VEM CRESCENDO NO BRASIL, ATRÁVES DA INTERNET.
          </p>
          <Nav className="d-flex align-items-center buttons_container">
            <Button variant="warning text-white" className="m-2 px-5">
              Aulas
            </Button>
            <a href="https://pay.hotmart.com/F21722188U?checkoutMode=10">
              <Button
                variant="outline-warning text-white"
                className="m-2  px-5"
              >
                Garantir
              </Button>
            </a>
          </Nav>
        </Col>
      </Row>
      <section className="text-white">
        <Row className="d-flex align-items-center  justify-content-center">
          <Image src={internet} className="img__txt my-3" />
          <Col className="d-flex flex-column  justify-content-center " lg={5}>
            <h5 className="mt-3 ">SAIBA COMO TRABALHAR COM A INTERNET!</h5>
            <p>
              O mundo moderno é repleto de surpresas, ainda mais para aqueles
              que sabem aproveitar muito bem as oportunidades que esse mundo
              tecnológico nos apresenta. A internet, para alguns, nada mais é
              que uma fonte rica de pesquisa, de entretenimento e diversão,
              contudo, existem pessoas que transformaram essa maravilha da
              tecnologia em um trabalho com direito a ótimos salários.
            </p>
          </Col>
        </Row>
        <Row className="d-flex align-items-center  justify-content-center mt-5">
          <Image src={money} className="img__txt" />
          <Col className="d-flex flex-column  justify-content-center " lg={5}>
            <h5 className="mt-3 ">DINHEIRO TODOS OS DIAS EM SUA CONTA!</h5>
            <p>
              Você vai aprender como ganhar dinheiro rapidamente, usando um
              método novo e simples, bastando você ler e aplicar somente 3
              passos. Muitas pessoas entram em contato comigo, querendo uma
              forma de ganhar dinheiro rápido, e na maioria das vezes estão
              desesperadas para ganhar dinheiro no HOTMART O que, na verdade,
              representa um perigo: Cair em armadilhas de pessoas mal
              intencionadas. Infelizmente, ainda hoje muitas pessoas caem em
              promessas fáceis de ganhar dinheiro fácil, e no final acabam
              perdendo dinheiro.
            </p>
          </Col>
        </Row>
        <Row className="d-flex align-items-center  justify-content-center mt-5">
          <Image src={decisions} className="img__txt" />
          <Col className="d-flex flex-column  justify-content-center " lg={5}>
            <h5 className="mt-3 ">
              AS ESTRATÉGIAS MAIS ATUALIZADAS DO MERCADO!
            </h5>
            <p>
              Se você quer ser um Afiliado de produtos digitais, precisa
              planejar muito bem suas estratégias de divulgação para conseguir
              fazer boas vendas. Existem várias maneiras de divulgar um produto
              na internet e todas elas dependem de variantes, como:
            </p>
            <ul>
              <li>Nicho do produto; </li>
              <li>Público que você quer atingir; </li>
              <li>Canais de comunicação que serão usados; </li>
              <li>Site do produto; </li>
              <li>Materiais extras disponibilizados pelo Produtor. </li>
            </ul>
          </Col>
        </Row>
        <Row className="d-flex align-items-center  justify-content-center mt-5">
          <Image src={phone} className="img__txt" />
          <Col className="d-flex flex-column  justify-content-center " lg={5}>
            <h5 className="mt-3 ">TRABALHE USANDO APENAS O SEU SMARTPHONE!</h5>
            <p>
              A venda de produtos digitais é uma área que surgiu recentemente e
              está em ascensão. Essa atividade tem atraído cada vez mais pessoas
              em busca de dinheiro extra ou de uma carreira. Porém, para se
              destacar nesse meio e ganhar dinheiro, é necessário investir tempo
              para estudar ferramentas, técnicas e boas práticas de mercado.
              Além disso, as soluções tecnológicas e estratégias de negócio
              mudam com frequência, exigindo que produtores e afiliados se
              mantenham atualizados. É muito fácil encontrar na Internet
              diversos materiais e cursos gratuitos sobre negócios digitais,
              marketing digital e produção de conteúdo. O blog da Hotmart também
              possui um vasto acervo com dicas sobre esses temas e sobre como
              utilizar a plataforma da melhor forma para vender mais.
            </p>
          </Col>
        </Row>
        <Row className="d-flex align-items-center  justify-content-center mt-5">
          <Image src={boss} className="img__txt" />
          <Col className="d-flex flex-column  justify-content-center" lg={5}>
            <h5 className="mt-5 ">SEJA SEU PROPRIO CHEFE!</h5>
            <p>
              Cada vez mais pessoas sonham em ter um negócio próprio não apenas
              para se dedicar a fazer algo que gostam, mas também para ter mais
              liberdade com seu tempo e seu dinheiro. Quando você empreende em
              um novo negócio físico ou pela internet, existe a vantagem de ser
              seu próprio chefe e alcançar a tão desejada autonomia no trabalho.
              Você mesmo pode organizar suas pautas, tarefas e atividades de
              acordo com seu ritmo de trabalho, preferências e disponibilidade.
              Ser seu próprio chefe permite que você descubra a metodologia de
              trabalho ideal para você e aprenda algo que talvez nunca imaginou
              fazer.
            </p>
          </Col>
        </Row>
        <Row className="d-flex align-items-center  justify-content-center mt-5">
          <Image src={time} className="img__txt" />
          <Col className="d-flex flex-column  justify-content-center " lg={5}>
            <h5 className="mt-3 ">TRABALHE NO SEU TEMPO!</h5>
            <p>
              Nos últimos anos, cada vez mais pessoas têm abandonado o mercado
              de trabalho convencional em busca de maior qualidade de vida, mais
              tempo livre e melhores remunerações. Outro fator que tem
              influenciado diversas mudanças de carreira é a possibilidade de
              passar mais tempo com a família, principalmente no caso de
              profissionais que têm filhos.
            </p>
          </Col>
        </Row>
      </section>
    </Col>
  </section>
);

export default Hero;
