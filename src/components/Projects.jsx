import React from 'react'
import ProjectsCard from './ProjectsCard'

const projectData = [
    {
        id: 1,
        title: "E-commerce website",
        desc: "E-commerce website with the stripe payment methods to buy the items",
        imgUrl : "/ecommerce.png",
        gitURL: "/",
        previewURL: "https://ecommerce.sandeep22.xyz/"
    },
    {
        id: 2,
        title: "E-commerce website",
        desc: "E-commerce website with the stripe payment methods to buy the items",
        imgUrl : "/ecommerce.png",
        gitURL: "/",
        previewURL: "https://ecommerce.sandeep22.xyz/"
    },
    {
        id: 3,
        title: "E-commerce website",
        desc: "E-commerce website with the stripe payment methods to buy the items",
        imgUrl : "/ecommerce.png",
        gitURL: "/",
        previewURL: "https://ecommerce.sandeep22.xyz/"
    },
    {
        id: 4,
        title: "E-commerce website",
        desc: "E-commerce website with the stripe payment methods to buy the items",
        imgUrl : "/ecommerce.png",
        gitURL: "/",
        previewURL: "https://ecommerce.sandeep22.xyz/"
    },
    {
        id: 5,
        title: "E-commerce website",
        desc: "E-commerce website with the stripe payment methods to buy the items",
        imgUrl : "/ecommerce.png",
        gitURL: "/",
        previewURL: "https://ecommerce.sandeep22.xyz/"
    },
    {
        id: 6,
        title: "E-commerce website",
        desc: "E-commerce website with the stripe payment methods to buy the items",
        imgUrl : "/ecommerce.png",
        gitURL: "/",
        previewURL: "https://ecommerce.sandeep22.xyz/"
    },
]

const Projects = () => {
  return (
    <>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8'>My Projects</h2>   
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {
                projectData.map(
                    project => <ProjectsCard 
                        key={project.id} 
                        title={project.title} 
                        imgUrl={project.imgUrl} 
                        desc={project.desc} 
                        gitURL={project.gitURL} 
                        previewURL={project.previewURL} 
                    /> 
                )
            }
        </div>
    </>
  )
}

export default Projects 