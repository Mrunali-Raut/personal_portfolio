import React, { useState, useEffect,useContext } from 'react';
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import ar from "../../img/ar.jpg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect';
// import Resume from './resume.pdf';
import Mrunali_Raut_Resume from '../../img/resume.pdf';

const Intro = () => {
  // const words = 'Web Designer,Web Developer,Blockchain Developer,Full Stack Developer,Mern Stack Developer';
  
 


  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Mrunali Raut</span>
          <span>
          Developer with high level of experience in   <div className="typewriter">
          <Typewriter
  options={{
    strings: ['Salesforce Development', 'Salesforce Administration','Freelancing'],
    autoStart: true,
    loop: true,
  }}
/>
    </div>
        
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>  
          
        </Link>
        <div className="mt-[-8rem] ml-[7rem]"> {/* Add margin top for spacing */}
          <a href={Mrunali_Raut_Resume} download>
            <button className="button s-button">Download CV</button>
          </a>
        </div>
        {/* social icons */}
        <div className="i-icons">
        <a href="https://github.com/Mrunali-Raut" target={"_blank"} ><img src={Github} alt="https://github.com/Mrunali-Raut"/></a>  
        <a href="https://www.linkedin.com/in/mrunali-raut/" target={"_blank"} ><img src={LinkedIn} alt="https://www.linkedin.com/in/mrunali-raut/" /></a> 
        
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={ar} alt="" width={"260rem"} height={"460rem"} />
        {/* animation */}
        <motion.img
          initial={{ left: "-20%" }}
          whileInView={{ left: "-58%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        >
        </motion.img>

        {/* <motion.div
           initial={{ top: "9rem" ,left: "25rem"}}
           whileInView={{ top: "0rem" , left:"0px" }}
           transition={transition}
           className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="Freelancer" className="custom-font-size" />
        </motion.div> */}


        <motion.div
          initial={{ top: "18rem", left: "74%" }}
          whileInView={{ left: "68%" , top:"0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Salesforce" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "11rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Salesforce" text2="Admin" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
     
    </div>
  );
};

export default Intro;
