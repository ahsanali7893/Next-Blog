import { assets } from "@/assets/assets";
import { IoMdAdd } from "react-icons/io";
import Image from "next/image";
import React from "react";
import { FaBlogger } from "react-icons/fa6";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 py-3 sm:pl-14 border border-black">
        <Image src={assets.logo} alt="logo" width={70} />
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link
            href={"/admin/addProduct"}
            className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <IoMdAdd />
            <p>Add Blog</p>
          </Link>
          <Link
            href={"/admin/productList"}
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <FaBlogger />
            <p>Blog Lists</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
