 
import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
function Upcoming() {
  const [lyrica, setLyrica] = useState([]);
  useEffect(() => {
    const getLyrica = async () => {
      try {
       const res = await axios.get("http://localhost:4001/lyrica");
       
       const data= res.data.filter((data) => data.category === "Free");
       console.log(data);
       setLyrica(data);
      } catch (error) {
        console.log (error);
      }
    };
    getLyrica();
  },[]);

//   console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
 
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div >
          <h1 className="font-semibold text-xl pb-2 justify-center">Upcoming Events</h1>
          <p>
          Experience the soul-stirring rhythms and melodies of Indian classical music at Lyrica’s concert series from September 15-17,
           2024 – each day featuring a unique blend of timeless tradition and artistic excellence.
          </p>
        </div>
<br></br>
        <div>
          {/* slider represent initial data !! start*/}
        <Slider {...settings}>
      {lyrica.map((item)=>(
        <Cards item={item} key={item.id}/>
      ))}
      </Slider>
        </div>
     {/* slider represent initial data !! end*/}
   
       
      </div>
      <div></div>
    </>
  );
}
export default Upcoming;
