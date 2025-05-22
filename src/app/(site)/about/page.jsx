import React from "react";
import Link from "next/link";
import Image from "next/image";
import pic from "../../../../public/assets/Header.jpg";

function About() {
  return (
    <div
      className="mx-auto grid max-w-2xl grid-cols-1 items-center 
    gap-x-8 gap-y-6 px-4 py-4 lg:max-w-7xl lg:grid-cols-2 lg:px-8" id="about"
    >
      <div className=" bg-white sm:border-r-0 lg:border-r-4 border-cyan-800 p-4">
        <p
          className=" text-2xl text-cyan-950 font-medium uppercase text-center letter-spacing1
        leading-relaxed mb-4 p-4"
        >
          React - Front End Developer
        </p>
        <h4 className="text-5xl font-extrabold text-center m-2 headingcursive ">
          Hello,
          <span className=" text-5xl bg-gradient-to-r from-orange-400 via-red-500 to-cyan-700 bg-clip-text text-transparent">
            {" "}
            I&apos;m Preethi
          </span>
        </h4>
        <p
          className=" text-xl text-cyan-950 font-medium text-center 
        leading-relaxed mb-4 p-4"
        >
          Crafting Website designs is a TRUE pleasure of Mine.<br/>
          I Enjoy the process of taking an Idea and Transforming it into a
          Beautiful and Functional website.
        </p>
        
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>

      <div>
        <Image
          src={pic}
          width={500}
          height={300}
          alt="img-banner-01"
          className=""
        />
      </div>
    </div>
  );
}

export default About;
