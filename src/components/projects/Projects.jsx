import React from 'react';
import "./Projects.css";
import {Card} from "./Card";

const projects = [
    {
      title: "Mi Proyecto 1",
      description: "Esta es una descripción breve de mi primer proyecto",
      image: "https://example.com/myproject1.png",
      link: "https://github.com/username/myproject1",
    },
    {
      title: "Mi Proyecto 2",
      description: "Esta es una descripción breve de mi segundo proyecto",
      image: "https://example.com/myproject2.png",
      link: "https://github.com/username/myproject2",
    },
    {
      title: "Mi Proyecto 3",
      description: "Esta es una descripción breve de mi tercer proyecto",
      image: "https://example.com/myproject3.png",
      link: "https://github.com/username/myproject3",
    },
  ];

export const Projects = () => {
    return (
        <div className="projects__container"> {/* Agregar una clase CSS para el contenedor de proyectos */}
          <h2 className='projects__title'>Mis Proyectos</h2>
          {projects.map((project, index) => (
            <Card key={index} data={project}/>
          ))}
        </div>
      );
}
