function AboutSection({ title, children, image, imagePosition, reverse }) {
  return (
    <section className={`about-section ${reverse ? 'reverse' : ''}`}>
      <div className="about-text">
        {title && <h2>{title}</h2>}
        {children}
      </div>
      <div className="about-image">
        <img src={image} alt={title || 'Kingson Guerrier'} />
      </div>
    </section>
  );
}

export default AboutSection;