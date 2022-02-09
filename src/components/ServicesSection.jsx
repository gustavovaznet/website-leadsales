//SERVICES SECTION

//IMPORTING
import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import styled from "styled-components";
import { About, Description, Image } from "../styles";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

//SERVICES SECTION
const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
      <Description>
        <h2>
          Os pilares da nossa solução de <span>vendas</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Planejamento</h3>
            </div>
            <p>Gestão do tempo e dos projetos com foco em vendas.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Clientes</h3>
            </div>
            <p>Captação de clientes interessados em seus produtos/serviços.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Simplicidade</h3>
            </div>
            <p>Entenda o seu negócio de maneira simples e eficiente.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Receita</h3>
            </div>
            <p>Foco no aumento das vendas aumentando as suas receitas.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <div className="home2">
          <img src={home2} alt="home" />
        </div>
      </Image>
    </Services>
  );
};

//SERVICES
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

//CARDS
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

//CARD
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
