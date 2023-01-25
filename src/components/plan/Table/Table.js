import React from "react";
import { Table } from "react-bootstrap";
import { Lazy } from "./TableArray";
import "./table.css";

export const Event = () => {
  const FunctionLazyGoneTable = (item) => {
    return (
      <>
        <tbody>
          <tr>
            <td
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                padding: "16px",
              }}
            >
              {item.tittle}
            </td>
            <td
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                padding: "16px",
              }}
            >
              {item.tittle2}
            </td>
            <td
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                padding: "16px",
              }}
            >
              {item.tittle3}
            </td>
          </tr>
        </tbody>
      </>
    );
  };

  return (
    <>
      <div className="container-fluid table-container" >
        <p className="table-heading">
          Activation & Other Charges Details (W.E.F. 01/02/2021)
        </p>

        <div className="container">
          <div className="row">
            <Table
              style={{ border: "1px solid black", borderCollapse: "collapse" }}
              border="1"
              responsive
              hover
            >
              <thead>
                <tr>
                  <th
                    style={{
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      padding: "16px",
                      fontSize: "1.1rem",
                    }}
                  >
                    Other Charges
                  </th>
                  <th
                    style={{
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      padding: "16px",
                      fontSize: "1.1rem",
                    }}
                  >
                    Amount in Rs.
                  </th>
                  <th
                    style={{
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      padding: "16px",
                      fontSize: "1.1rem",
                    }}
                  >
                    Applicable Remarks
                  </th>
                </tr>
              </thead>

              {Lazy.map(FunctionLazyGoneTable)}
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Event;
