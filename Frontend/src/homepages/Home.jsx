/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
 import React from 'react'

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Upcoming from '../components/Upcoming';
// import Marquee from '../components/Marquee';
import Footer from '../components/Footer';

function Home() {
  return (
  <>
  
   <Navbar />
  <Banner />
  <Upcoming/>
  {/* <Marquee /> */}
  <Footer />
  </>
  )
}

export default Home;
