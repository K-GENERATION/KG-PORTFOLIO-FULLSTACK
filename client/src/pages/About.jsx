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
        <strong>Kingson GUERRIER </strong>est un <em>Administrateur d'affaires</em> et
          <em>Consultant en Technologies de l'Information et de la Communication (TIC)</em>. Passionné
          par la tech, la <em>transformation numérique</em> et le développement des organisations,
          Il a un parcours qui allie <strong>le management</strong>, <strong>la technologie</strong> et <strong>l'analyse de données</strong> et il se consacre à la
          conception et au développement de solutions numériques pouvant repondre aux grands défis du
          monde moderne.
        </p>
        <p>
          Détenteur d'un diplôme en <strong>Administration des Affaires</strong> à l'<em>Université Publique du Nord
          au Cap-Haïtien (UPNCH)</em>, il poursuit actuellement un <em>Diplôme Universitaire Technique</em> en Technologies de l'Information et de la Communication (TIC) à l'Institut des
          Sciences, des Technologies et des Études Avancées d'Haïti (ISTEAH), tout en renforçant
          ses compétences en <em>Data Analytics</em>, <em>Développement Web</em>, <em>Gestion de Projets</em> et
          <em>Intelligence Artificielle</em>. Convaincu que les compétences évoluent en permanence, il
          considère la formation continue comme un pilier essentiel de son développement personnel et
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
          Il a passé <strong>trois (3) ans </strong> à la tête du projet national de culture générale intitulé: <strong>Questions Pour les
          Surdoués (QPS)</strong>, une initiative qui valorise l'excellence académique et la
          culture générale auprès des jeunes. Cette expérience lui a permis de développer une
          solide expertise en planification stratégique, en gestion d'équipes, en coordination
          opérationnelle et en leadership.
        </p>
        <p>
          Son <em>engagement communautaire</em> l'a également conduit à exercer diverses responsabilités
          au sein d'organisations de développement, entre autres <strong>MhatriX NG</strong>, où
          il a contribué à la <em>gestion administrative</em>, à l'<em>organisation d'activités</em>, au <em>pilotage
          de projets</em> et au <em>renforcement des capacités des équipes</em>.
        </p>
        <p>Kingson est aussi :</p>
        <ul className="about-roles">
          <li><em>Technopreneur</em></li>
          <li><em>Conférencier</em></li>
          <li><em>Professeur informatique</em></li>
        </ul>
      </AboutSection>

      {/* SECTION 3 - photo à droite */}
      <AboutSection
        title="MISSION, VISION ET CONVICTION"
        image="/images/about-3.png"
      >
        <p>
          Aujourd'hui, il s'intéresse particulièrement à la manière dont les technologies
          transforment les organisations. Ses travaux de recherche portent sur l'<em>impact des TIC
          sur le management moderne des organisations</em>, avec pour <em>objectif de démontrer que la
          technologie constitue désormais un levier incontournable de performance, de
          compétitivité et de pérennité.</em>
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