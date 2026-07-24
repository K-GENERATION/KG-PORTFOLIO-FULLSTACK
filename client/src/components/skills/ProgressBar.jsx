function ProgressBar({ name, percentage }) {
  return (
    <div className="progress-item">
      <div className="progress-label">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;