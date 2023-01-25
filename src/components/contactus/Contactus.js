import React from "react";
import Contact from "./Contact/Contact";
import "./Contact/Contact.css";
import Layout from "../../layout";
import MainMap from "./Contact/MainMap";

const Contactus = () => {
  return (
    <>
      <Layout>
        <Contact />
        <MainMap />
      </Layout>
    </>
  );
};

export default Contactus;
