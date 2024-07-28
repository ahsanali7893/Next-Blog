import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { assets } from "@/assets/assets";
import SideBar from "@/Components/AdminComponent/SideBar";
import Image from "next/image";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark" />
        <SideBar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] border-b border-black">
            <h3 className="font-medium">Admin Panel</h3>
            <Image src={assets.defaultAvatar} width={40} height={40} alt="" />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
