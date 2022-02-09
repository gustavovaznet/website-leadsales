//ABOUT SECTION

//IMPORTING
import React from "react";
import home1 from "../img/logo-large.svg";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

//ABOUT SECTION
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Conheça a nossa solução <span>sales growth</span></motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Uma máquina de vendas que gera um aumento exponêncial nas vendas dos
          seus produtos e serviços. Ficou curioso?
        </motion.p>
        <motion.button variants={fade}>Saiba mais</motion.button>
      </Description>
      <Image className="image">
        <motion.img variants={photoAnim} src={home1} alt="home"/>
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
