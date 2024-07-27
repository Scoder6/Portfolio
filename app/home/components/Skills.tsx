'use client'
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover'
import { SiGit, SiNextdotjs, SiReact, SiCplusplus, SiAngular, SiTailwindcss, SiMongodb, SiJavascript, SiTypescript, SiSpringboot, SiKotlin, SiApachecassandra, SiJetbrains } from 'react-icons/si'

export default function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,

    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,

    },
    {
      text: "C++",
      Icon: SiCplusplus,

    },
    {
      text: "Angular",
      Icon: SiAngular,

    },
    {
      text: "TypeScript",
      Icon: SiTypescript,

    },
    {
      text: "SpringBoot",
      Icon: SiSpringboot,

    },
    {
      text: "MongoDB",
      Icon: SiMongodb,

    },
    {
      text: "JavaScript",
      Icon: SiJavascript,

    },
    {
      text: "Kotlin",
      Icon: SiKotlin,
    
    },
    {
      text: "Apache Cassandra",
      Icon: SiApachecassandra
    },
    {
      text: "Jet Brains IDE",
      Icon: SiJetbrains
    }


  ]



  return (
    <div className="max-w-5xl mx-auto px-8">
        <Title text="Skills ㄨ" className="flex flex-col items-center justify-center -rotate-6"/>
        
        <HoverEffect items={skills}/>

    </div>
  )
}
