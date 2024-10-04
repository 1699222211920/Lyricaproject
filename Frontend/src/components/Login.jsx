/* eslint-disable react/jsx-no-undef */
import React from "react";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if(res.data){
          alert("Signup Successfully")
        }
      }).catch ((err) => {
        console.log(err)
        alert("Error: "+ err)
      
      })
    };
  return (
  


    <div >
<dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-slate-800 dark:text-white ">
    <form onSubmit={handleSubmit(onSubmit)} method="modal">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    {/* Email */}
    <h3 className="font-bold text-lg">Login</h3>
    <div className="mt-4 space-y-2">
        <span>Email</span>
        <br></br>
        <input type="Email" placeholder="Enter your @ email here" className="w-80 px-3 border rounded-md outline-none"/>
      <br />
       {errors.email && (
          <span className="text-sm text-red-500">
            this feild is required
          </span>
        )}
    </div>
{/* password for user log */}
    <div className="mt-4 space-y-2">
        <span>Password</span>
        <br></br>
        <input type="Password" placeholder="Enter your *password*" className="w-80 px-3 border rounded-md outline-none"/>
        <br />
        {errors.password && (
          <span className="text-sm text-red-500">
            this feild is required
          </span>
        )}
    </div>
    {/* Button */}
    <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>  
       </div>
  </div>
</dialog>
    </div>
  );
}

export default Login;
