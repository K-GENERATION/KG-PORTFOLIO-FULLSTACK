import { timelineData } from '../../data/projectsData';

function ProjectsTimeline() {
  return (
    <section className="projects-timeline-section">
      <h2>MON EVOLUTION</h2>
      <div className="projects-timeline">
        {timelineData.map((item, i) => (
          <div className="timeline-point" key={i}>
            <span className="timeline-year">{item.annee}</span>
            <div className="timeline-dot"></div>
            <span className="timeline-label">{item.titre}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsTimeline;