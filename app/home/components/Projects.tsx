import { title } from 'process'
import React from 'react'
import { SiApachecassandra, SiCss3, SiHtml5, SiIonic, SiJavascript, SiKotlin, SiSpringboot, SiTypescript } from 'react-icons/si'
import Title from './Title'
import { Indent } from 'lucide-react'
import Link from 'next/dist/client/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

function Projects() {

    const projects = [

        {
            title: "Amazon-Clone",
            tech: [SiHtml5, SiCss3, SiJavascript],
            Link:"https://github.com/Scoder6/Amazon_clone",
            cover: "/AmazonClone.png",
            background: "bg-indigo-500",
          
        },
        {
            title: "Tic-Tac-Toe",
            tech: [SiHtml5, SiCss3, SiJavascript],
            Link:"https://github.com/Scoder6/Tic-Tac-Toe_Game",
            cover: "/TicTacToe.png",
            background: "bg-green-500",
          
        },
        {
            title: "Cabapp",
            tech: [SiHtml5, SiCss3, SiJavascript, SiTypescript, SiApachecassandra, SiSpringboot, SiKotlin, SiIonic, ],
            Link:"https://play.google.com/store/apps/details?id=com.cabs24.partner&hl=en",
            cover: "/CabApp.jpg",
            background: "bg-cyan-400",
          
        },
        {
            title: "Cabapp",
            tech: [SiHtml5, SiCss3, SiJavascript, SiTypescript, SiApachecassandra, SiSpringboot, SiKotlin, SiIonic, ],
            Link:"https://play.google.com/store/apps/details?id=com.cabs24.partner&hl=en",
            cover: "/CabApp.jpg",
            background: "bg-pink-400",
          
        },


    ]

  return (
    <div className='py-10 p-5 sm:p-0'>
        
    <Title text='Projects🎨' className='flex flex-col items-center justify-center rotate-6'/>

        <div className='grid grid-col-1 sm:grid-cols-2 pt-20 gap-5'>

            {projects.map((project, index)=>{
                return ( 
                <Link href={project.Link} key={index}>
                    <div className={cn(
                        "p-5 rounded-md",
                        project.background
                    )}><DirectionAwareHover imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>

                   <div className='space-y-5'>
                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                    <div className='flex items-center gap-5 '>
                        {project.tech.map((Icon, index)=>{
                            return <Icon className="w-3 h-3" key={index}/>
                        })}
                    </div>
                   </div> 

                  </DirectionAwareHover></div>
                </Link>

                );
        
            })}
            
        </div>

    </div>
  )
}

export default Projects