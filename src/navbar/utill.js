import { Link } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";

const mainMenuItems = [
  { menu: "HOME", path: "/" },
  { menu: "ABOUT US", path: "/aboutus" },
  { menu: "PRODUCT", path: "/product" },
  { menu: "SOLUTIONS", path: "/solutions" },
  { menu: "PLAN & PACKAGES", path: "/plan&packages" },
  { menu: "BILL PAYMENT", path: "/bill-payment" },
  { menu: "GALLERY", path: "/gallery" },
  { menu: "NETWORK AREA", path: "/networkarea" },
  { menu: "CAREER", path: "/career" },
  { menu: "CONTACT US", path: "/contactus" },
  // { menu: "ADMIN PANEL", path: "/dashboard" },
];
export const subMenuItems = [
  { menu: "CCTV", path: "/cctv" },
  // { menu: "Automatic Boom Barrier", path: "/auotometic-boom-barrier" },
  { menu: "Video Door Phone", path: "/video-door-phone" },
  { menu: "Wi-fi Zone & Hotspot", path: "/wifi-zone-&-hotspot" },
  { menu: "IP Biometric System with Access Control", path: "/ip-biometric-system" },
];
const productMenuItems = [
  { menu: "Fixed WiFi Broadband", path: "/fixed" },
  { menu: "Broadband on Ethernet", path: "/props" },
  { menu: "Broadband on Fiber", path: "/fiber" },
  { menu: "Direct Internet Access(DIA)", path: "/dia" },
];
const subMenuLinks = (name,menu) => {
  return (
    <>
      {/* <Nav> */}
        <NavDropdown className="navdropdown" title={name}>
          {menu.map((subItem) => {
            return (
              <>
                <NavDropdown.Item>
                  <Link className="navlink" to={subItem.path}>
                    {subItem.menu}{" "}
                  </Link>
                </NavDropdown.Item>
              </>
            );
          })}
        </NavDropdown>
      {/* </Nav> */}
    </>
  );
};
export const navMenuItems = mainMenuItems.map((items, index) => {
  if (items.menu === "SOLUTIONS") {
    return subMenuLinks(items.menu ,subMenuItems );
  }
  if (items.menu === "PRODUCT") {
    return subMenuLinks(items.menu , productMenuItems);
  }
  return (
    <Link key={index} className="link" to={items.path}>
      {items.menu}
    </Link>
  );
});
