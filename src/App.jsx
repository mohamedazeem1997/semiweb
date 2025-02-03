import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Home />
            <Navbar />
        </>
    );
}

export default App;
