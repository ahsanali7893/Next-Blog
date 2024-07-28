import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Header() {
  const [email, setEmail] = useState("");
  const onSubmithandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post("/api/email", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    } else {
      toast.error("Error");
    }
  };

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={60}
          height={70}
          alt="Logo"
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium sm:py-3 sm:px-6 border border-solid border-black py-1 px-3 shadow-[-7px_7px_0px_#000000]">
          Get Started
          <FaArrowRight />
        </button>
      </div>
      <div className="text-center my-8">
        <h2 className="text-3xl sm:text-5xl font-medium">Latest Blog</h2>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          laudantium fugit soluta, nemo doloribus error dolore quidem minima
          iste!
        </p>
        <form
          onSubmit={onSubmithandler}
          action=""
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none"
          />
          <button
            type="submit"
            className="border-black border-l py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
