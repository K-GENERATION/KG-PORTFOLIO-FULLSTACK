function Statistics() {
  const stats = [
    { titre: 'Orienté résultats', description: 'Des solutions efficaces pour des résultats concrets.' },
    { titre: 'Innovation', description: "J'utilise la technologie pour créer de la valeur." },
    { titre: 'Leadership', description: "Gestion de projets et d'équipes avec rigueur et vision." },
    { titre: 'Engagement', description: 'Engagé à livrer des projets de qualité.' },
  ];

  return (
    <section className="statistics">
      {stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <h3>{stat.titre}</h3>
          <p>{stat.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Statistics;