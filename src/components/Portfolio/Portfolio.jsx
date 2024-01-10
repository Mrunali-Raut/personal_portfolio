import React, { useContext, useState } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import grammer from "../../img/grammer.png";
import news from "../../img/news.png";
import car from "../../img/car.png";
import { themeContext } from "../../Context";
import p1 from './p1.pdf';
import p2 from './p2.pdf';
import p11 from'../../img/p1.png'
import p22 from'../../img/p22.png'

const projects = [
  {
    title: "Ebay Sales and Service Project",
    description: "Implemented a lead management system for eBay Sales and Service Company, enhancing business growth by prioritizing quick and efficient service for potential leads.",
    image: p11,
    
    pdfLink: p1,
  },
  {
    title: "TV Company Mini Project",
    description: "This mini project was implemented for a TV company to show different fields (page layouts) for the different vendors as per the product type",
    image: p22,
    pdfLink: p2,
  },

];

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [activeProject, setActiveProject] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveProject(index);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };

  const handleDownloadPdf = (pdfLink) => {
    // Use JavaScript to trigger the PDF download
    window.open(pdfLink, "_blank");
  };

  return (
    <div className="portfolio mt-[15rem]" id="portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={1} // Adjust slidesPerView for mobile
        grabCursor={true}
        className="portfolio-slider"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <h3 className="font-bold">{project.title}</h3>
            <a
              href={project.pdfLink}
              download
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={activeProject === index ? "active" : ""}
              style={{ position: "relative", overflow: "hidden" }}
            >
              <img src={project.image} alt="" height="220rem" width="100%" />
              {activeProject === index && (
                <div className="overlay">
                  <p>Click To Download</p>
                </div>
              )}
            </a>
            <p>{project.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
