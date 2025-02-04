import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
function App() {
    return (
        <>
            <Home />
            <Services />
            <Navbar />
        </>
    );
}

export default App;
