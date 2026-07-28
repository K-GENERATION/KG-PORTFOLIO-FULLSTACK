import { filterCategories } from '../../data/projectsData';

function ProjectFilter({ activeFilter, onFilterChange }) {
  return (
    <div className="project-filter-bar">
      {filterCategories.map((cat) => (
        <button
          key={cat.key}
          className={`filter-btn ${activeFilter === cat.key ? 'filter-active' : ''}`}
          onClick={() => onFilterChange(cat.key)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilter;