"use client"
import { useState } from "react";

import Header from "./header";
import SideBar from "./sidebar";
import Content from "./content";
import "./home.css";
export default function Home() {
  const [active, setActive] = useState("ABOUT");
  return (
    <>
      <div className="homecontainer overflow-scroll">
        {/* <img style={{height:'100%',width:'100%'}} src='/images/backgroundexclamation.jpg' /> */}
        <div className="homesubcontainer">
          <Header />
          <div className="flex ">
            <SideBar active={active} setActive={setActive}/>
            <Content active={active}/>
          </div>
        </div>
      </div>
    </>
  );
}
