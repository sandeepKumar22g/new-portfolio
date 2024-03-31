import React from 'react'
import ProjectsCard from './ProjectsCard'

const projectData = [
    {
        id: 1,
        title: "E-commerce website",
        desc: "E-commerce website with the stripe payment methods to buy the items",
        imgUrl : "/ecommerce.png",
        gitURL: "https://github.com/sandeepKumar22g/e-commerce",
        previewURL: "https://ecommerce.sandeep22.xyz/"
    },
    {
        id: 2,
        title: "Crypto verse",
        desc: "Normal crypto info realted website to see the details of the crypto currency",
        imgUrl : "/crypto.png",
        gitURL: "https://github.com/sandeepKumar22g/blockchain",
        previewURL: "https://blockchaininfo.netlify.app/"
    },
    {
        id: 3,
        title: "Carhub",
        desc: "Car hub is a website with UI/UX design with the car details",
        imgUrl : "/carhub.png",
        gitURL: "https://github.com/sandeepKumar22g/car_hub",
        previewURL: "https://car-hubs.netlify.app/"
    },
    {
        id: 4,
        title: "Notion clone",
        desc: "Notion clone with the functionality of realtime file edit and changes",
        imgUrl : "/notion.png",
        gitURL: "https://github.com/sandeepKumar22g/notion-clone",
        previewURL: "https://notions.sandeep22.xyz/"
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
