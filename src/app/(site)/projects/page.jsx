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
        <h4 className="text-5xl font-extrabold text-center m-2 headingcursive bg-gradient-to-r from-orange-400 via-red-500 to-cyan-700 bg-clip-text text-transparent>Projects">
          {" "}
         --------- Projects ---------
        </h4>
         <div
          className="grid grid-cols-1 
        md:gap-x-5 gap-y-4 sm:grid-cols-1 md:grid-cols-2
        sm:gap-4 lg:gap-5 bg-gray-200 p-4 border-2 border-gray-300 rounded-2xl"
        >
          {projects.map((product) => (
            <div key={product._id} className="rounded-lg m-2 ">
              <h5 className="font-medium text-gray-900 text-xl p-2">
                {product.name}
              </h5>
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={550}
                  height={350}
                  className="object-contain shadow-xl border-b-4 border-gray-400"
                />
              )}

              <h5 className="m-2 text-base text-gray-700">
                <PortableText value={product.content} />
              </h5>
              <p className=""><Link href={`${product.url}`}><button className=" bg-white font-light justify-items-center uppercase p-2 rounded-lg" style={{ letterSpacing: "0.1rem" }}>View Project</button></Link>
            </p></div>
          ))}
        </div>
      </div>
    </>
  );
}
