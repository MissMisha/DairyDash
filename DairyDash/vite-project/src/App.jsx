import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profilepage from './profile'
import Milkmandash from './Milkman'
import Consumers from './Consumers'
import MilkmanListing from './MilkmanListing'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Mainheader from './Mainheader'
import Maincontent from './Maincontent'
import Reviews from './Reviews'
import Navbar2 from './Navbar2'
import Orders from './orders'
import Earningsummary from './Earningsummary'
import Navbar3 from './Navbar3'
import ProfilePage from './profile'
import Navbar4 from './Navbar4'
import MilkmanStatus from './MilkmanStatus'
import SubscriptionStatus from './SubscriptionStatus'
import ContactUs from './ContactUs'
import MilkmanListings from './MilkmanLIistings'
import Footer from './Footer'
import Signup from './Signup'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
  
    
  <main className="flex-grow">
  <Routes>
      <Route path="/" element={<><Navbar />
      <Mainheader />
      <Maincontent></Maincontent>
      <Reviews></Reviews>
      </>} />

      <Route path="/milkman" element={<><Navbar2></Navbar2> <Orders></Orders> <Earningsummary></Earningsummary></>} />
      <Route path="/profile" element={<><Navbar3></Navbar3> <ProfilePage></ProfilePage></>} />
      <Route path="/profile-milk" element={<><Navbar3></Navbar3> <ProfilePage></ProfilePage></>} />
      <Route path="/consumers" element={<><Navbar4></Navbar4> <MilkmanStatus></MilkmanStatus> <SubscriptionStatus></SubscriptionStatus> <ContactUs></ContactUs></>} />
      <Route path="/milkmanlist" element={<><Navbar3></Navbar3> <MilkmanListings></MilkmanListings></>} />
      <Route path="/signup" element={<><Navbar3></Navbar3> <Signup></Signup></>} />
      <Route path="/login" element={<><Navbar3></Navbar3> <Login></Login></>} />
  </Routes>
  </main>
  <Footer />


</BrowserRouter>
    </>
  )
}

export default App
