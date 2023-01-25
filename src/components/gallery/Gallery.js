import React from "react";
import Layout from "../../layout";

const Gallery = () => {
  return (
    <><Layout>
      <div>
        <img style={{ height: "280", width: "100%" }} src="img/gall1.png" alt=""/>
      </div>
      <div style={{ backgroundColor: "white" }} className="container-fluid">
          <p
            style={{
              fontSize: "60px",
              color: "darkblue",
              fontWeight: "600",
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "30px",
              marginBottom: "0px",
            }}
          >
            gallery
          </p>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "600",
              textAlign: "center",
              paddingBottom: "100px",
              marginBottom: "0px",
            }}
          >
            Coming Soon.......!
          </p>
        </div>
        </Layout>
    </>
  );
};

export default Gallery;
