import React from "react";
import NavbarCom from "./components/Navbar";
import HomePage from "./components/Home";
import Footer from "./components/Footer";
import ContextProvider from "./context/Provider";

const App = () => {
  return (
    <ContextProvider>
      <div className="flex flex-col min-h-screen">
        <NavbarCom />
        <HomePage />
        <Footer />
      </div>
    </ContextProvider>
  );
};

export default App;
