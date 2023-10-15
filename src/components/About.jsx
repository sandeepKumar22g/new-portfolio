"use client"

import Image from 'next/image'
import React, {useTransition, useState} from 'react'
import TabsButton from './TabsButton'

const About = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition();

    const TAB_DATA = [
        {
            title: "Skills",
            id: "skills",
            content: (
                <ul className='list-disc pl-4'>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>React Native</li>
                    <li>MongoDB</li>
                    <li>HTML/CSS/JS</li>
                </ul>
            )
        },
        {
            title: "Education",
            id: "education",
            content: (
                <ul className='list-disc pl-4'>
                    <li>B. Tech(ECE) 2017-2021</li>
                    <li>12<sup>th</sup> (PCM) 2016-2017</li>
                    <li>10<sup>th</sup> 2014-2015</li>
                </ul>
            )
        },
        {
            title: "Certification",
            id: "certification",
            content: (
                <ul className='list-disc pl-4'>
                    <li>MERN Stack</li>
                    <li>AWS Cloud Practitioner</li>
                    <li>Networking(CCNA & MCITP)</li>
                    <li>Embedded Systems</li>
                </ul>
            )
        },
        {
            title: "Experience",
            id: "experience",
            content: (
                <ul className='list-disc pl-4'>
                    <li>MERN Stack</li>
                    <li>AWS Cloud Practitioner</li>
                    <li>Networking(CCNA & MCITP)</li>
                    <li>Embedded Systems</li>
                </ul>
            )
        },

    ]

    const handleTabChange = (id) =>{
        startTransition(()=>{
            setTab(id)
        })
    }
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-10 sm:py-16'>
                <Image src="/about-image.png" alt="about section image" width={550} height={500} className='hidden md:block' />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At necessitatibus natus hic mollitia nostrum officiis, eveniet optio. Libero saepe est eum minima autem esse, commodi at, adipisci ipsa, quae ullam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo exercitationem praesentium aperiam, at perspiciatis, qui pariatur quam voluptatibus sit molestias sapiente natus voluptate a sunt ut suscipit, id voluptatem dolorem.</p>
                    <div className='flex flex-row mt-8 flex-wrap'>
                        <TabsButton active={tab === "skills"} selectTab={()=>handleTabChange("skills")} >
                            Skills
                        </TabsButton>
                        <TabsButton active={tab === "education"} selectTab={()=>handleTabChange("education")} >
                            Education
                        </TabsButton>
                        <TabsButton active={tab === "certification"} selectTab={()=>handleTabChange("certification")} >
                            Certification
                        </TabsButton>
                        <TabsButton active={tab === "experience"} selectTab={()=>handleTabChange("experience")} >
                            Experience
                        </TabsButton>
                    </div>
                    <div className='mt-8 '>
                        {
                            TAB_DATA.find((e)=>e.id === tab).content
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About