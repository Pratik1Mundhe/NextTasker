"use client";
import React, { useContext } from 'react';
import { useRouter } from "next/navigation";
import { useAppContext, useMonthContext } from "../layout";



const Header = () => {

  const router = useRouter();
  
  const {loggedIn, setLoggedIn} = useAppContext();
  const handleSingUp = () => {
    router.push("/signup");
  }

  const handleSignin = () => {
    router.push("/signin");
  }


  

  return (
    <div className="flex flex-row justify-between">
        <b className="text-2xl mt-2">    
            {/* create usecontext */}
            September 2024
        </b>
        <div className="flex flex-row gap-8">
            {/* useref for loggedin */}
            {/* if loggedin show logout button and datepicker*/}
            {!loggedIn && <button onClick={handleSingUp} className="border  border-gray-300  w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Signup</button>}
            {!loggedIn && <button onClick={handleSignin} className="border  border-gray-300  w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Signin</button>}
            {loggedIn && <button onClick={() => setLoggedIn(false)} className="border  border-gray-300  w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Logout</button>}
        </div>
    </div>
  )
}

export default Header;
