import React from 'react'
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Link from 'next/link';

export default function navbar() {

    const socials = [
        {
            link: "https://pl.linkedin.com/in/pawelwaszkiewicz",
            label: "LinkedIn",
            icon: SiLinkedin,
        },
        {
            link: "https://github.com/realpvblo",
            label: "GitHub",
            icon: SiGithub,
        },
        {
            link: "mailto:pawel.waszkiewicz99@gmail.com",
            label: "Email",
            icon: MdOutlineAlternateEmail,
        }
    ]

  return (
    <nav className='py-10 flex justify-between items-center px-20'>
        <h1 className='text-4xl font-bold underline underline-offset-8 decoration-sky-400 -rotate-2'>Paweł 👨🏼‍💻</h1>
        <div className='flex items-center gap-5'>
            {socials.map((social, index) => (
                <Link key={index} href={social.link} aria-label={social.label}>
                    <social.icon className='size-8 hover:scale-125 transition-all' />
                </Link>
            ))}
        </div>
    </nav>
  )
}
