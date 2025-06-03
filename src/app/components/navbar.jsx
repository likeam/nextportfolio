"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "../components/navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" h-full flex items-center justify-between px-4 md:px-8 lg:px-24 xl:px-48">
      <div className=" hidden md:flex gap-4">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      <div className="">
        <Link
          href="/"
          className=" text-sm bg-black rounded-md p-1  font-semibold flex items-center justify-center"
        >
          <span className="  text-white m-1">Abdul</span>
          <span className=" bg-white text-black m-1">Rehman</span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4">
        <Link href="#">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      <div className=" md:hidden">
        <button
          className=" w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-10 h-1 bg-black rounded" />
          <div className="w-10 h-1 bg-black rounded" />
          <div className="w-10 h-1 bg-black rounded" />
        </button>
        {open && (
          <div className=" md:hidden absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-14 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
