//OUR WORK

//IMPORTING
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import sales from "../img/sales1.jpg";
import leads from "../img/leads1.jpg";
import marketing from "../img/marketing1.jpg";
import { motion } from "framer-motion";
import ScrollTop from "../components/ScrollTop";
import { sliderContainer, slider, pageAnimation, fade, photoAnim, lineAnim } from "../animation";
import { useScroll } from "../components/useScroll";

//OUR WORK
const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  //RETURN
  return (
    <Work
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>Sales - Aumento nas Vendas</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/sales">
          <Hide>
            <motion.img variants={photoAnim} src={sales} alt="sales" />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <h2>Leads - Captação de Clientes</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/leads">
          <img src={leads} alt="leads" />
        </Link>
      </Movie>
      <Movie ref={element2} variants={fade} animate={controls2} initial="hidden">
        <h2>Marketing - Promoção da Marca</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/marketing">
          <img src={marketing} alt="marketing" />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

//WORK
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;

//MOVIE
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #1E90FF;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

//HIDE
const Hide = styled.div`
  overflow: hidden;
`;

//FRAME 1
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #a9a9a9;
  z-index: 2;
`;

//FRAME 2
const Frame2 = styled(Frame1)`
  background: #696969;
`;

//FRAME 3
const Frame3 = styled(Frame1)`
  background: #282828;
`;

//FRAME 4
const Frame4 = styled(Frame1)`
  background: #1E90FF;
`;

export default OurWork;
