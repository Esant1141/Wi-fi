import React from "react";
import Business from "./dropdown/CCTV";
import Homeb from "./dropdown/VideoDoor";
import Building from "./dropdown/WIFI";
import Edu from "./dropdown/IP";
import Layout from "../../layout";

const Solutions = () => {
  return (
    <>
      <Layout>
        <Business />
        <Homeb />
        <Building />
        <Edu />
      </Layout>
    </>
  );
};

export default Solutions;
