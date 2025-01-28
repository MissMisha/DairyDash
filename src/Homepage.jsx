import React from "react"
import Mainheader from "/src/components/Mainheader"
import Maincontent from "/src/components/maincontent"
import Reviews from "/src/components/Reviews"
import Navbar from "./components/Navbar"

function Homepage() {
  return (
    <>
    <Navbar></Navbar>
      <Mainheader />
      <Maincontent />
      <Reviews />
    </>
  )
}

export default Homepage

