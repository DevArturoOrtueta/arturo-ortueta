import React from 'react'
import { InfoCard } from './InfoCard'

const aboutInfo =[
    {
        id: 1,
        title: "Experience",
        subtitle: "3 Years Working",
        icon: "bx bx-award about__icon bx-tada-hover"
    },
    {
        id: 2,
        title: "Completed",
        subtitle: "10 + Projects",
        icon: "bx bx-briefcase-alt about__icon bx-tada-hover"
    },
    {
        id: 3,
        title: "Support", 
        subtitle: "Online 24/7",
        icon: "bx bx-support about__icon bx-tada-hover"
    }
]

const Info = () => {

   
  return (
    <div className="about__info grid">
        {
            aboutInfo.map(({id, title, subtitle, icon}) => (
                <InfoCard title={title} subtitle={subtitle} icon={icon} key={id}/>
            ))
        }
        
    </div>
  )
}

export default Info