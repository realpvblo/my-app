import Image from "next/image";
import React from "react";

export default function certificates() {
  return (
    <>
      <div className="w-full relative pb-24">
        <button className="cursor-auto absolute left-2/4 -translate-x-2/4 h-8 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          My certificates
        </button>
      </div>
      <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-14 lg:flex-row items-center justify-center relative z-50 pb-20">
        <div className="grid grid-cols-1 gap-4 lg:grid-flow-row lg:grid-cols-3 lg:grid-rows-2 sm:grid-cols-2 gap-4">
          <a
            href="./cert/domestika.png"
            target="_blank"
            className="block max-w-48"
          >
            <img
              src="./cert/domestika.png"
              alt="Image 1"
              className="w-full aspect-square object-cover rounded-lg"
            />
          </a>
          <a
            href="./cert/google.png"
            target="_blank"
            className="block max-w-48"
          >
            <img
              src="./cert/google.png"
              alt="Image 2"
              className="w-full aspect-square object-cover rounded-lg"
            />
          </a>
          <a
            href="./cert/oracle.png"
            target="_blank"
            className="block max-w-48"
          >
            <img
              src="./cert/oracle.png"
              alt="Image 3"
              className="w-full aspect-square object-cover rounded-lg"
            />
          </a>
          <a
            href="./cert/upskillist.png"
            target="_blank"
            className="block max-w-48"
          >
            <img
              src="./cert/upskillist.png"
              alt="Image 4"
              className="w-full aspect-square object-cover rounded-lg"
            />
          </a>
          <a href="./cert/sfbcc.jpg" target="_blank" className="block max-w-48">
            <img
              src="./cert/sfbcc.jpg"
              alt="Image 5"
              className="w-full aspect-square object-cover rounded-lg"
            />
          </a>
        </div>
      </div>
    </>
  );
}
