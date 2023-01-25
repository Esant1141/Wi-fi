import React from "react";
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/aboutus/About";
// import Product from "./components/product/Product";
import Solutions from "./components/solutions/Solutions";
import Plan from "./components/plan/Plan";
import Bill from "./components/bill/Bill";
import Gallery from "./components/gallery/Gallery";
import Network from "./components/network/Network";
import Career from "./components/career/Career";
import Contactus from "./components/contactus/Contactus";
import Fixed from "./components/product/dropdown/Fixed/Fixeddrop";
import Props from "./components/product/dropdown/Ethernet/Ethernet";
import Menu from "./components/career/menu/Menu";
import Login from "./admin-panel/Pages/login/Login";
import Register from "./admin-panel/Pages/register/Register";
import ForgotPassword from "./admin-panel/Pages/forgot-password/ForgotPassword";
import Dashbaord from "./admin-panel/Dashbaord";
import HomePage from "./admin-panel/Pages/Home-page";
import NotFound from "./NotFound";
import Fiber from "./components/product/dropdown/fiber/Fiber";
import DIA from "./components/product/dropdown/DIA/DIA";
import Buy from "./components/home/bestprice/Buy";
import Change from "./components/home/bestprice/Change";
import NewCollection from "./footer/NewCollection";
import IP from "./components/solutions/dropdown/IP";
import WIFI from "./components/solutions/dropdown/WIFI";
import VideoDoor from "./components/solutions/dropdown/VideoDoor";
import CCTV from "./components/solutions/dropdown/CCTV";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/plan&packages" element={<Plan />} />
        <Route path="/bill-payment" element={<Bill />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/networkarea" element={<Network />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contactus" element={<Contactus />} />
        {/* dropdown */}
        <Route path="/fixed" element={<Fixed />} />
        <Route path="/props" element={<Props />} />
        <Route path="/fiber" element={<Fiber />} />
        <Route path="/dia" element={<DIA />} />
        <Route path="/cctv" element={<CCTV />} />
        <Route path="/video-door-phone" element={<VideoDoor />} />
        <Route path="/wifi-zone-&-hotspot" element={<WIFI />} />
        <Route path="/ip-biometric-system" element={<IP />} />
        {/* <Route path="/edu" element={<Edu />} /> */}
        {/* dropdown */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashbaord />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/change" element={<Change />} />
        <Route path="/new-collection" element={<NewCollection />} />
      </Routes>
    </>
  );
};

export default App;
