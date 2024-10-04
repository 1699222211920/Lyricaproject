/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import {Link} from "react-router-dom";

function Event() {
  const [lyrica, setLyrica] = useState([]);
  useEffect(() => {
    const getLyrica = async () => {
      try {
       const res = await axios.get("http://localhost:4001/lyrica");
       console.log(res.data);
       setLyrica(res.data);
      } catch (error) {
        console.log (error);
      }
    };
    getLyrica();
  },[]);
  return (
    <>
      <div className="max-w-screen-1xl container  dark:bg-slate-900 dark:text-white mx-auto md:px-20 px-4 my-3  ">
        <br></br>
        <div className="mt-12 items-center justify-center text-center ">
          <h1 className="text-2xl font-semibold md:text-4xl ">
            Welcome to our new music destinations
            <span className="text-pink-500"> We are here to entertain you</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non,
            maxime consequuntur earum totam quae autem adipisci praesentium
            sequi optio nesciunt aut eligendi culpa provident veritatis dicta
            ipsum fuga porro?

          </p>
       <Link to='/'>          
       <button className="mt-6 bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200 ">Go home</button> 

       </Link>
       
        </div>
        <div className="mt-12 grid grid-cols-1  md:grid-cols-4">
          {/* Json file for event database */}
          {lyrica.map((item1) => (
            <Cards key={item1.id} item={item1} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Event;
