import Link from "next/link";
import React from "react";

export default function hero() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-14 lg:flex-row items-center justify-center relative z-50">
      <div className="space-y-10 text-center lg:text-left content">
        <h1 className="text-3xl lg:text-7xl font-bold">
          Hi
          <span className="waving-hand">👋🏻</span>
          <br />
          <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:bg-sky-400 after:w-0 after:animate-underline">
            {"I'm Paweł"}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          Frontend Developer with a passion for creating modern websites.
        </p>
        <Link
          href={"mailto:pawel.waszkiewicz99@gmail.com"}
          className="inline-block"
        >
          {/* <div className='border-2 py-2 px-5 border-sky-400 rounded-xl hover:bg-sky-400 duration-300 transition-all'>
                                    <h1 className='text-lg font-normal'>Contact 📮 </h1>
                            </div> */}
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>Get in touch</span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </Link>
      </div>
      <div className="myImage border-2 border-sky-400 rounded-xl">
        <span className="absolute -right-10 -top-2 z-10 items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 cursor-default">
          ○ Open to work
        </span>
        <img
          src="/me.png"
          alt="photo"
          className="size-80 rotate-2 rounded-2xl hover:rotate-0 hover:scale-105 transition-all duration-300"
        />
      </div>
    </div>
  );
}
