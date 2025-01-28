import React from "react";
import Navbar4 from "./components4/Navbar4";
import MilkmanStatus from "./components4/MilkmanStatus.jsx";
import SubscriptionStatus from "./components4/SubscriptionStatus.jsx";
import ContactUs from "./components4/ContactUs.jsx";

function Consumers() {
    return (
      <>
      <Navbar4></Navbar4>
      <MilkmanStatus></MilkmanStatus>
      <SubscriptionStatus></SubscriptionStatus>
      <ContactUs></ContactUs>
      </>
    )
  }
  
  export default Consumers
  