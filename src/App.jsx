import Navbar from "./components/Navbar";
import React from "react";
import Footer from "./components/Footer";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Homepage from "./Homepage";
import Profile from "./Profile";
import Milkmandash from "./Milkmandash";
import Consumers from "./Consumers";
import MilkmanListing from "./MilkmanListing";

function App() {
  return (

    <BrowserRouter>
  
    
        <main className="flex-grow">
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/milkman" element={<Milkmandash />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/consumers" element={<Consumers></Consumers>} />
            <Route path="/milkmanlist" element={<MilkmanListing></MilkmanListing>} />
        </Routes>
        </main>
        <Footer />

  
    </BrowserRouter>

  );
}

export default App;
