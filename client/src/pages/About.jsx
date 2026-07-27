import AboutSection from '../components/about/AboutSection';

function About() {
  return (
    <div className="about-page">

      {/* SECTION 1 - photo à droite */}
      <AboutSection
        title="BIOGRAPHIE"
        image="/images/about-1.png"
      >
        <p>
        <strong>Kingson Guerrier</strong>, surnommé <strong>KG</strong>, est un Administrateur d'affaires et
          Consultant en Technologies de l'Information et de la Communication (TIC). Passionné
          par l'innovation, la transformation numérique et le développement des organisations,
          son parcours allie management, technologie et analyse de données, consacré à la
          conception et au développement de solutions numériques pour répondre aux défis du
          monde moderne.
        </p>
        <p>
          Détenteur d'un diplôme en Administration des Affaires à l'Université Publique du Nord
          au Cap-Haïtien (UPNCH), il poursuit actuellement un Diplôme Universitaire Technique
          (DUT) en Technologies de l'Information et de la Communication (TIC) à l'Institut des
          Sciences, des Technologies et des Études Avancées d'Haïti (ISTEAH), tout en renforçant
          ses compétences en Data Analytics, développement web Full-Stack, gestion de projets et
          intelligence artificielle. Convaincu que les compétences évoluent en permanence, il
          considère la formation continue comme un pilier essentiel de son développement
          professionnel.
        </p>
      </AboutSection>

      {/* SECTION 2 - photo à gauche */}
      <AboutSection
        title="PARCOURS PROFESSIONNEL"
        image="/images/about-2.png"
        reverse
      >
        <p>
          Au fil des années, il a coordonné plusieurs projets à fort impact social et éducatif.
          Depuis plus de cinq ans, il dirige le projet national <strong>Questions Pour les
          Surdoués (QPS)</strong>, une initiative qui valorise l'excellence académique et la
          culture générale auprès des jeunes. Cette expérience lui a permis de développer une
          solide expertise en planification stratégique, en gestion d'équipes, en coordination
          opérationnelle et en leadership.
        </p>
        <p>
          Son engagement communautaire l'a également conduit à exercer diverses responsabilités
          au sein d'organisations de développement, entre autres <strong>MhatriX NG</strong>, où
          il a contribué à la gestion administrative, à l'organisation d'activités, au pilotage
          de projets et au renforcement des capacités des équipes.
        </p>
        <p>Kingson est aussi :</p>
        <ul className="about-roles">
          <li>Technopreneur</li>
          <li>Conférencier</li>
          <li>Professeur informatique</li>
        </ul>
      </AboutSection>

      {/* SECTION 3 - photo à droite */}
      <AboutSection
        title="MISSION, VISION ET CONVICTION"
        image="/images/about-3.png"
      >
        <p>
          Aujourd'hui, il s'intéresse particulièrement à la manière dont les technologies
          transforment les organisations. Ses travaux de recherche portent sur l'impact des TIC
          sur le management moderne des organisations, avec pour objectif de démontrer que la
          technologie constitue désormais un levier incontournable de performance, de
          compétitivité et de pérennité.
        </p>

        <div className="about-mission">
          <h3>Mission</h3>
          <p>
            Accompagner les organisations dans leur transformation en mettant le management, les
            technologies numériques et l'analyse des données au service de la performance, de
            l'innovation et du développement durable.
          </p>
        </div>

        <div className="about-vision">
          <h3>Vision</h3>
          <p>
            Construire un avenir où les organisations, quelles que soient leur taille ou leur
            secteur d'activité, exploitent pleinement le potentiel des technologies pour créer
            davantage de valeur, prendre de meilleures décisions et générer un impact positif sur
            la société.
          </p>
        </div>

        <blockquote className="about-slogan">
          « Tourner le dos à la technologie, c'est regarder l'avenir dans un rétroviseur » 
                                                                                        Kingson GUERRIER
        </blockquote>
      </AboutSection>

    </div>
  );
}

export default About;