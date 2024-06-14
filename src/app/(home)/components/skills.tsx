"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Icon } from "lucide-react";
import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiFigma,
  SiGit,
  SiJquery,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function skills() {
  const skills = [
    {
      text: "HTML",
      Icon: FaHtml5,
    },
    {
      text: "CSS",
      Icon: FaCss3Alt,
    },
    {
      text: "JavaScript",
      Icon: IoLogoJavascript,
    },
    {
      text: "React",
      Icon: FaReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "TailwindCSS",
      Icon: SiTailwindcss,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
	  text: "SCSS",
      Icon: FaSass,
    },
    {
	  text: "Node.js",
	  Icon: SiNodedotjs,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "Figma",
      Icon: SiFigma,
    },
    {
      text: "jQuery",
      Icon: SiJquery,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto sm:px-8 py-16">
      <title>My skills</title>
      <div className="w-full relative pb-8">
        {/* <span className="absolute left-2/4 -translate-x-2/4 text-center mx-auto z-10 items-center rounded-md bg-sky-500 px-2 py-1 text-xs font-medium text-slate-50 ring-1 ring-inset ring-slate-50 cursor-default">• Skills</span> */}
        <button className="cursor-auto absolute left-2/4 -translate-x-2/4 sm:h-8 h-auto animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          My skills
        </button>
      </div>
      <HoverEffect items={skills} />
    </div>
  );
}
