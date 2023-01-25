import React from "react";
import Work from "./work/Work";
import CarouselFade from "./carousel/Carousel";
import Welcome from "./carousel/Welcome";
import Infosol from "./infosol/Infosol";
import Zoombox from "./experience/Cards";
import Skew from "./bestprice/Skew";
import Layout from "../../layout";

const cardData = {
  title: "Our Services",
};
const Home = () => {
  return (
    <Layout>
      <CarouselFade />
      <Welcome />
      <Infosol />
      <Skew />
      <Work />
      <Zoombox cardData={cardData} />
    </Layout>
  );
};

export default Home;
