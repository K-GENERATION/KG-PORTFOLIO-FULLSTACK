import { useState } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilter from '../components/projects/ProjectFilter';
import ProjectsTimeline from '../components/projects/ProjectsTimeline';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('tous');

  const projetsFiltres =
    activeFilter === 'tous'
      ? projectsData
      : projectsData.filter((p) => p.categorie === activeFilter);

  return (
    <div className="projects-page">

      {/* HERO */}
      <section className="projects-hero">
        <div className="projects-hero-shapes">
          <span className="shape shape-1"></span>
          <span className="shape shape-2"></span>
          <span className="shape shape-3"></span>
        </div>
        <h1>MES PROJETS</h1>
        <p>
          Chaque projet temoigne mon engagement envers l'innovation, le
          développement des organisations et la transformation numérique.
        </p>
      </section>

      {/* FILTRES */}
      <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {/* GRILLE DE PROJETS */}
      <div className="projects-grid">
        {projetsFiltres.map((projet) => (
          <ProjectCard key={projet.id} projet={projet} />
        ))}
      </div>

      {/* TIMELINE */}
      <ProjectsTimeline />

    </div>
  );
}

export default Projects;