import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Work from "./components/Work";
import Clients from "./components/Clients";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="px-4 pt-2 space-y-16 lg:space-y-20 xl:space-y-24 xl:px-10 xl:pt-10">
        <Navbar />
        <Header />
        <Services />
        <Work />
        <Clients />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
}

export default App;
