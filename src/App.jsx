import React from "react";
import "./assets/scss/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Residencies from "./components/Residencies";
import Value from "./components/Value";
import Contact from "./components/Contact";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Companies />
            <Residencies />
            <Value />
            <Contact />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default App;
