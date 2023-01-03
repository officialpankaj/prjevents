import Aos from "aos";
import { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import AllServices from "./AllServices/AllServices";
import Contact from "./Contact/Contact";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home/Home";
import Services from "./Services";

function App() {
  useEffect(() => {
    window.addEventListener("load", () => {
      Aos.init({
        duration: 600,
      });
      Aos.refresh();
    });
  }, []);
  return (
    <div className="container-fluid p-0 m-0">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/all-services/*" element={<AllServices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
