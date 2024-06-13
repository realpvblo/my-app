"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import './wavingHand.css';

export function HeroHighlightDemo() {
  return (
    <HeroHighlight
			className="flex gap-x-5">
        <div className="flex flex-col justify-center">
        	<motion.h1
            initial={{
            opacity: 0,
            y: 20,
            }}
            animate={{
            opacity: 1,
            y: [20, -5, 0],
            }}
            transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-left "
        		>
            <Highlight className="text-black dark:text-white">
						Nazywam się Paweł
            </Highlight>
        	</motion.h1>
        </div>
      <img src="/me.png" alt=""  className="meImg"/>
    </HeroHighlight>
  );
}
