import { useState, useEffect } from 'react';

const quotes = [
  "La technologie n'est pas une option, mais une nécessité de pérennisation organisationnelle.",
  "La technologie a droit de vie et de mort sur les organisations.",
  "Choisir la tech ne mène pas automatiquement au succès, mais l'ignorer mène tout droit à la banqueroute.",
];

function QuoteRotator() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // démarre le fondu de sortie

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setFade(true); // fondu d'entrée pour la nouvelle citation
      }, 400); // doit correspondre à la durée de transition CSS
    }, 4500); // durée d'affichage de chaque citation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote-rotator">
      <p className={`quote-text ${fade ? 'quote-visible' : 'quote-hidden'}`}>
        « {quotes[index]} »
      </p>
      <span className="quote-author">— Kingson Guerrier</span>
    </div>
  );
}

export default QuoteRotator;