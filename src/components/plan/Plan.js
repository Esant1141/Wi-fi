import React from "react";
import Terms from "./Terms/Terms";
import Event from "./Table/Table";
import Plancard from "./Plancard/Plancard";
import Layout from "../../layout";

const Plan = () => {
  return (
    <>
      <Layout>
        <div>
          <img style={{ width: "100%", height:"220px" }} src="img/abb.png" alt="" />
        </div>
        <Event />
        <Terms />
        <Plancard />
      </Layout>
    </>
  );
};

export default Plan;
