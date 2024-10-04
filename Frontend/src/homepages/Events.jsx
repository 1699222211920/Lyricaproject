/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar';
import Event from '../components/Event';
import Footer from '../components/Footer';

function Events() {
    // console.log(Elist);
  return (
   <>
   <Navbar />
   <div className='min-h-screen '>
   <Event />
   </div>
   
   <Footer />
   </>
  )
}

export default Events
