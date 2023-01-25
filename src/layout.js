import React from "react";
import Header from "./navbar/Header";
import Header2 from "./navbar/Header2";
import BrandExample from "./navbar/Header1";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header2 />
      <BrandExample />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
