function Statistics() {
  const stats = [
    { titre: '5+ ENTREPRISES', description: 'Accompagnées dans la transformation digitale' },
    { titre: '3+ PLATFORMES WEB ', description: ' Développées et maintenues' },
    { titre: '10+ PROJETS ', description: "Réalisés, participés et coordonnés" },
    { titre: '5+ FORMATIONS', description: 'Réalisées, participées et coordonnées' },
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