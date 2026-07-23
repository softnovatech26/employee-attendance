import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
// import Footer from "./pages/Footer.jsx";
// import FeatureCards from "./pages/FeatureCards.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./pages/Footer.jsx"

import Register from "./pages/Employee-Register.jsx";
import Login from "./pages/Softnova-login.jsx";

function App() {
  return (

    <>
    
     <Navbar />
    
    {/* <div className="">
      <h1 className=" text-5xl font-bold text-white">
        Employee Attendance System
      </h1>

    </div> */}

    {/* <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-950 text-white"> */}
      {/* Content */}

    {/* </div> */}


    {/* <FeatureCards /> */}
    
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    <Footer />

    </>

  )
}

export default App;