import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function Layoult() {
  return (
    <>
      <Header />
      <main className="main" id="top">
        {/* <div className="preloader" id="preloader">
          <div className="loader">
            <div className="line-scale">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div> */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layoult;
