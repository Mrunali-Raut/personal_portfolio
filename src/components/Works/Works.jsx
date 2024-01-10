import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import m from "../../img/m.png";
import ap from "../../img/ap.png";

import nodejs from "../../img/nodejs.png";
import sf from "../../img/sf.png";
import sf1 from "../../img/sf1.png";

import sol from "../../img/sol.png";
import py from "../../img/py.jpg";
import mdbb from "../../img/mdbb.jpg";
import jsss from "../../img/jsss.png";
import java from "../../img/java.png";
import cpp from "../../img/cpp.png";
import react from "../../img/react.png";
import mysql from "../../img/mysql.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left ">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Skills
          </span>
          <span style={{fontSize:"1.5rem"}} >English | Hindi | Marathi</span>
          
          <spane>
          Salesforce Admin and Developer 
          <br />
          <hr />
          Apex Programming
            <br />
            <hr />
          SOQL, SOSL, and DML
            <br />
            <hr />
          Reports and Dashboards
            <br />
            <hr />
          Oops Concepts
          <br />
          <hr />
          Javascript
          <br />
          <hr />
          Lightning web components
          <br />
          <hr />
          Visualforce pages
          <br />
          <hr />
          Salesforce Integration
          <br />
          <hr />
          Data migration
          <br />
          <hr />
          Salesforce Automation
          <hr />
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
     
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={jsss} alt=""height={"152rem"} />
          </div>
          <div className="w-secCircle">
            <img src={m} alt="" height={"152rem"} />
          </div>
          <div className="w-secCircle" >
            <img src={sf} alt="" height={"2rem"} />
          </div>{" "}
          <div className="w-secCircle">
            <img src={sf1} alt=""  height={"152rem"}/>
          </div>
         
          <div className="w-secCircle">
            <img src={ap} alt=""  height={"152rem"}/>
          </div>
          
        
         
        </motion.div>
      
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
