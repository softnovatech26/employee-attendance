import Navbar from "./components/Navbar.jsx";
import Footer from "./pages/Footer.jsx";
import FeatureCards from "./pages/Cards.jsx";

function App() {
  return (

    <>
    
     <Navbar />
    
    <div className="">
      <h1 className=" text-5xl font-bold text-white">
        Employee Attendance System
      </h1>


    </div>

    {/* <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-950 text-white"> */}
      {/* Content */}
    

    <FeatureCards />

    {/* </div> */}

    <Footer />

    </>

  )
}

export default App;