function Statistics() {
  const stats = [
    { titre: 'ADMINISTRATION D\'AFFAIRES', description: 'Gestion financière | Planification stratégique | Optimisation des processus' },
    { titre: 'TECHNOLOGIE', description: "J'utilise la technologie pour créer de la valeur." },
    { titre: 'GESTION DE PROJETS', description: "Gestion de projets et d'équipes avec rigueur et vision." },
    { titre: 'ANALYSE DE DONNÉES', description: 'Engagé à livrer des projets de qualité.' },
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