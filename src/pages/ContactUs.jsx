//CONTACT US

//IMPORTING
import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

//CONTACT US
const ContactUs = () => {
  return (
    <ContactStyle exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{ background: "#fff" }}>
      <div>
        <form>
          <Title>
              <motion.h2 variants={titleAnim}>Envie uma mensagem</motion.h2>
          </Title>
            <Social variants={titleAnim}>
              <input type="text" placeholder="Seu nome" style={{ width: "400px" }} required></input>
            </Social>
            <Social variants={titleAnim}>
              <input type="email" placeholder="Seu email" style={{ width: "400px" }} required></input>
            </Social>
            <Social variants={titleAnim}>
              <input type="text" placeholder="Assunto" style={{ width: "400px" }} required></input>
            </Social>
            <Social variants={titleAnim}>
              <textarea type="text" placeholder="Mensagem..." style={{ width: "400px", height: "150px" }} required></textarea>
            </Social>
            <Social variants={titleAnim}>
              <button type="submit" style={{ background: "#1E90FF" }}>Enviar</button>
            </Social>
        </form>
      </div>
    </ContactStyle>
  );
};

//CONTACT STYLE
const ContactStyle = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

//TITLE
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  text-align: center;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
  @media (max-width: 700px) {
    margin: 0.5rem;
  }
`;

//SOCIAL
const Social = styled(motion.div)`
  display: flex;
  align-items: center;  
  margin: 1.5rem;
`;

export default ContactUs;
