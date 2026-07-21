import Hero from '../components/home/Hero';
import Statistics from '../components/home/Statistics';
import CTA from '../components/home/CTA';

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Statistics />
      <CTA />
    </div>
  );
}

export default Home;