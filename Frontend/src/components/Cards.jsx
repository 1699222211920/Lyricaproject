/* eslint-disable react/prop-types */
 
 
import React from "react";

function Cards({ item }) {
    // console.log(item);
return(
    <> <div className="mt-4 my-3 p-3 bg-rose-5md:text-2xl rounded border-48  dark:bg-slate-900 dark:text-white">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-300  dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image} alt="Event" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xs md:text-1xl ">
      {item.title}
      <div className="badge badge-warning  text-xs  md:text-1xl ">Entry {item.category}</div>
    </h2>
    <p>{item.description}</p>
    <div className="card-actions flex-justify-end md: justify-end">
         {/* <price Details if any wanted > */}
      {/* <div className="badge badge-outline"></div> */}
      <div className="badge badge-outline hover:bg-blue-500 hover:text-white duration-200">Readmore</div>
    </div>
  </div>
</div>
        </div>
    </>
)
};
export default Cards;
