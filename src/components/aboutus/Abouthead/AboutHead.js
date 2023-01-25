import React from "react";
import "./abouthead.css";

const AboutHead = () => {
  return (
    <>
      {" "}
      <div className="head-row">
        <div className="head-line"></div>
        <div>
          <img className="head-img" src="img/ab2.png" alt="" />
        </div>  
        <div className="head-div">
          <p className="about">About Us</p>
          <p className="head-para">
          Lazygone Private Limited provides high speed broadband Internet
            services across the city of Moradabad. Since its launch in 2015, Lazygone, through its path-breaking speeds and competitively prices
            plans, is today the largest and most contending ISP in Moradabad.
            Starting off small in 2015, Lazygone forayed into providing
            super fast internet services to the Moradabad clientele. Lazygone
            has become synonymous with high speed internet at value prices.
            Having offered the most affordable value for money plans to their
            customers in Dholpur over the years, Lazygone witnessed a 100%
            growth in its subscriber base in 2018, and a phenomenal 120% growth
            in 2019.
          </p>
        </div>
      </div>

    </>
  );
};

export default AboutHead;
