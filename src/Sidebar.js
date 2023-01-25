import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "./App.css";

const Sidebar = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "scroll initial",
        position: "fixed",
      }}
    >
      <CDBSidebar textColor="white" backgroundColor="lightblue">
        <CDBSidebarHeader
          className="hide-show"
          prefix={<i className="fa fa-bars fa-large"></i>}
        >
          <a
            href="/dashboard"
            className="text-decoration-none"
            style={{ color: "white" }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            {/* <Dropdown>
              <Dropdown.Toggle
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  paddingLeft: "0px",
                }}
              > */}
                <CDBSidebarMenuItem>Pages</CDBSidebarMenuItem>
              {/* </Dropdown.Toggle>
              <Dropdown.Menu
                style={{ background: "none", border: "none", color: "white" }}
              >
                <Dropdown.Item> */}
                  <NavLink
                    exact
                    to="/login"
                    activeClassName="activeClicked"
                  >
                    <CDBSidebarMenuItem icon="table">Login</CDBSidebarMenuItem>
                  </NavLink>
                {/* </Dropdown.Item>{" "} */}
                {/* <Dropdown.Item> */}
                  <NavLink exact to="/register" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="user">
                      Register
                    </CDBSidebarMenuItem>
                  </NavLink>
                {/* </Dropdown.Item>{" "}
                <Dropdown.Item> */}
                  <NavLink
                    exact
                    to="/home-page"
                    activeClassName="activeClicked"
                  >
                    <CDBSidebarMenuItem icon="chart-line">
                      home
                    </CDBSidebarMenuItem>
                  </NavLink>
                {/* </Dropdown.Item>{" "}
              </Dropdown.Menu>
            </Dropdown> */}
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
