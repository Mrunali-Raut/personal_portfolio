import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import pp from "../../img/pp.jpg";
import ar from "../../img/ar.jpg";


const Testimonial = () => {
  const clients = [
    {
      img: ar,
      review:
        "A highly proficient Salesforce Developer with almost 2 years of experience in software development. Expert level understanding of Salesforce CRM and its development Life Cycle. My expertise extends to Service, Sales, process optimization, and the identification and resolution of bottlenecks and bugs in complex systems. Committed to excellence, self-motivator, quick-learner, and team-player and with strong problem solving and communication skills.",
    }
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>About Me </span>
        
        
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img}  alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
