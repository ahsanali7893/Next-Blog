import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaGooglePlus, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image src={assets.logo} alt="" width={120} />
      <p className="text-sm text-white">All right reserved. Copyright @N</p>
      <div className="flex text-white gap-4">
        <FaFacebook size={25}/>
        <FaTwitter size={25}/>
        <FaGooglePlus size={25}/>
      </div>
    </div>
  );
}
