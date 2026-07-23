import Hero from '../components/home/Hero';
import BioSummary from '../components/home/BioSummary';
import Statistics from '../components/home/Statistics';
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