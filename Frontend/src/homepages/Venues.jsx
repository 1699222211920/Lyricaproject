import React from 'react'
import Navbar from '../components/Navbar';
 import Footer from '../components/Footer';
import Venue from '../components/Venue';
function Venues() {
  return ( 
    <>
    <Navbar/>
    <div className='min-h-screen '>
  <div className='mt-12'>
  <Venue />
  </div>
    
    </div>
 
<Footer />
</>
)
}

export default Venues
