import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Findpet from './Pages/Findpet';
import Dogs from './Components/Dogs';
import DogsAdop from './Components/DogsAdop';

import Faq from './Pages/Faq';
import CatsAdop from './Components/CatsAdop';
import HamsterAdop from './Components/HamsterAdop';
import RabbitAdop from './Components/RabbitAdop';
import BirdsAdop from './Components/BirdsAdop';
import Footer from './Components/Footer';
import CaringPet from './Pages/CaringPet';
import Cpet2 from './Pages/Cpet2';
import AboutUs from './Pages/AboutUs';
import Petassesment from './Pages/Petassesment';
import Makeoppint from './Pages/Makeoppint';
import Payment from './Pages/Payment';
import Register from './Pages/Register';
import Login from './Pages/Login';
function App() {
  return (
    <>
<Router>  
  <Navbar></Navbar>
  <Routes>

   <Route path='/' element={<Login></Login>} ></Route>
   <Route path='/Pets' element={<Findpet></Findpet>}></Route>
   <Route path='/all/:id'element={<Dogs></Dogs>}></Route>
<Route path='/Home' element={<Homepage></Homepage>}></Route>

<Route path='/Dog' element={<DogsAdop></DogsAdop>} ></Route>
<Route path='/Cat' element={<CatsAdop></CatsAdop>} ></Route>
<Route path='/Hamsters' element={<HamsterAdop></HamsterAdop>} ></Route>
<Route path='/Rabbit' element={<RabbitAdop></RabbitAdop>} ></Route>
<Route path='/Birds' element={<BirdsAdop></BirdsAdop>} ></Route>
<Route path='/petc2' element={<Cpet2></Cpet2>} ></Route>
<Route path='/faq' element={<Faq></Faq>}></Route>
<Route path='/about' element={<AboutUs></AboutUs>}></Route>
<Route path='/petass' element={<Petassesment></Petassesment>} ></Route>
<Route path='/makeoppinment' element={<Makeoppint></Makeoppint>} ></Route>
<Route path='/payment' element={<Payment></Payment>}></Route>
<Route path='/reg' element={<Register></Register>}></Route>
<Route path='/log' element={<Login></Login>} ></Route>


  </Routes>

 {/* <Footer></Footer> */}
</Router>

    </>
  )
}

export default App