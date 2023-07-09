import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getProjects } from "../../../../sanity/sanity_utils";
import Link from "next/link";


export default async function ProjectPage() {
  const projects = await getProjects();
  return (
    <>
      <div className=" bg-white m-4" id="projectlist">
        <h4 className="text-5xl font-extrabold text-center m-2 headingcursive text-neutral-700">
          {" "}
          --------- Projects ---------
        </h4>
        <div
          className="grid grid-cols-1 
        md:gap-x-5 gap-y-4 sm:grid-cols-1 md:grid-cols-2
        sm:gap-4 lg:gap-5 bg-gray-200 p-4 border-2 border-gray-300 rounded-2xl"
        >
          {projects.map((product) => (
            <div key={product._id} className="rounded-lg bg-white py-2">
              <h5 className="font-medium text-cyan-700 text-xl p-2 text-center uppercase " style={{letterSpacing:"0.2rem"}}>
                {product.name}
              </h5>
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={550}
                  height={350}
                  className="object-contain m-auto shadow-xl border-b-4 border-gray-400 bg-white"
                />
              )}

              <h5 className="p-2 text-base text-gray-700 text-center bg-white leading-relaxed " style={{ letterSpacing: "0.1rem" }}>
                <PortableText value={product.content} />
              </h5>
              <div className="flex justify-center m-3">
              <div className=" m-1 ">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${product.url}`}
                >
                  <button
                    className=" bg-neutral-700 text-white  border border-neutral-800 font-medium justify-items-center uppercase py-2 px-3 rounded-lg hover:font-medium  hover:bg-cyan-600 scale-100 hover:scale-105 transition"
                    style={{ letterSpacing: "0.1rem" }}
                  >
                    View Project 
                  </button>
                </Link>
              </div>
              <div className="m-1">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${product.git}`}
                >
             
                  <button
                    className="bg-neutral-700 text-white hover:text-white border border-neutral-800 justify-items-center uppercase py-2 px-3 rounded-lg font-medium scale-100 hover:scale-105 transition hover:bg-amber-600"
                    style={{ letterSpacing: "0.1rem" }}
                  ><span>View Code</span> 
                   
                  </button>
                </Link>
              </div>
              {/* <div className="">
                
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${product.render}`}
                >
                  <button
                    className=" bg-white px-3 font-light justify-items-center uppercase py-2 rounded-lg"
                    style={{ letterSpacing: "0.1rem" }}
                  >
                    Back-End
                  </button>
                </Link>
              </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
