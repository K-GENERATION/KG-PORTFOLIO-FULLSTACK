import Hero from '../components/home/Hero';
import Statistics from '../components/home/Statistics';
import BioSummary from '../components/home/BioSummary';
import CTA from '../components/home/CTA';

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <BioSummary />
      <Statistics />
      <CTA />
    </div>
  );
}

export default Home;