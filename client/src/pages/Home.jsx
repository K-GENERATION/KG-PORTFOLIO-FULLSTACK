import Hero from '../components/home/Hero';
import BioSummary from '../components/home/BioSummary';
import ExperienceSummary from '../components/home/ExperienceSummary';
import ProjectsSummary from '../components/home/ProjectsSummary';
import Statistics from '../components/home/Statistics';
import ContactSummary from '../components/home/ContactSummary';


function Home() {
  return (
    <div className="home-page">
      <Hero />
      <BioSummary />
      <ExperienceSummary />
      <ProjectsSummary />
      <Statistics />
      <ContactSummary />
    </div>
  );
}

export default Home;