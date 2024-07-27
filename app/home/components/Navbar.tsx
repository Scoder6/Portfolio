import { link } from 'fs'
import Link from 'next/dist/client/link';
import React from 'react';
import { SiGithub, SiLinkedin } from "react-icons/si";
import { SiGeeksforgeeks } from 'react-icons/si';

export default function Navbar() {

  const socials = [
    {

      Link: "https://www.linkedin.com/in/saptash-chaubey-711a3322a/",
  
      Label: "Linkedin",
  
      Icon: SiLinkedin,
    },
    {

      Link: "http://Github.com/Scoder6",
  
      Label: "Github",
  
      Icon: SiGithub,
    },

  {
    Link: "https://www.geeksforgeeks.org/user/matulchae54m/",

    Label: "Sigeeksforgeeks",

    Icon: SiGeeksforgeeks,
  },


]
  return (
    <nav className='py-10 flex justify-between items-center'>
      <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Saptash Chaubey👨🏻‍🦱</h1>

      <div className='flex items-center gap-5 '>

        {socials.map((social, index)=>{

          const Icon = social.Icon

          return (
          <Link 

           href={social.Link}
           key={index} 
           aria-lable={social.Label}
           
           >
            <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
           </Link>
          );

        })}
      </div>
    </nav>
  )
}
