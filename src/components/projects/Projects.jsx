import React from 'react';
import "./Projects.css";

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
        <div className="projects-container"> {/* Agregar una clase CSS para el contenedor de proyectos */}
          <h2 className='projects__title'>Mis Proyectos</h2>
          {projects.map((project, index) => (
            <div key={index} className="project"> {/* Agregar una clase CSS para cada proyecto */}
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} />
              <p>{project.description}</p>
              <a href={project.link}>Ver en GitHub</a>
            </div>
          ))}
        </div>
      );
}
