import React from "react";
import NavBar from "../pages/Home/components/NavBar/NavBar";
import Footer from "../pages/Home/components/Footer/Footer";

function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
