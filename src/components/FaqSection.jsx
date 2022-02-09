//FAQ SECTION

//IMPORTING
import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../animation";

//FAQ SECTION
const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
      <Faq variants={fade} animate={controls} initial="hidden" ref={element}>
        <h2>
          Perguntas frequentes <span>FAQ</span>
        </h2>
        <AnimateSharedLayout>
          <Toggle title="Como começar a usar a solução?">
            <div className="answer">
              <p>
                Faça o cadastro no nosso site escolhendo o plano ideal para a sua você.
              </p>
            </div>
          </Toggle>
          <Toggle title="Qual a diferença entre os planos?">
            <div className="answer">
              <p>
                Possuímos 4 planos diferentes, cada um voltado para um nicho de negócio específico, verifique melhor as diferenças dos planos no nosso site.
              </p>
            </div>
          </Toggle>
          <Toggle title="Existe algum plano gratuito?">
            <div className="answer">
              <p>
                Sim, possuímos um plano chamado de Leadsales Start, o mesmo é 100% gratuito porém possui algumas limitações.
              </p>
            </div>
          </Toggle>
          <Toggle title="O Leadsales é um CRM ou ERP?">
            <div className="answer">
              <p>
                Não, somos uma máquina de vendas com intuito direto na captação de novos clientes e aumento nas vendas.
              </p>
            </div>
          </Toggle>
          <Toggle title="Posso utilizar a solução para aumento em vendas de serviços também?">
            <div className="answer">
              <p>
                Claro, a solução tem foco no aumento das vendas tanto de produtos quanto de serviços.
              </p>
            </div>
          </Toggle>
          <Toggle title="Quais os valores dos planos?">
            <div className="answer">
              <p>
                Você pode verificar os valores e detalhes dos planos no nosso site.
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </Faq>
  );
};

//FAQ
const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
