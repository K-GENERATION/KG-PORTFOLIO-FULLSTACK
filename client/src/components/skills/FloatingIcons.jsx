const icons = [
  { symbol: '💻', top: '5%', left: '8%', size: '2.5rem', delay: '0s', duration: '6s' },
  { symbol: '📊', top: '15%', left: '85%', size: '2rem', delay: '1s', duration: '7s' },
  { symbol: '🚀', top: '35%', left: '3%', size: '2.2rem', delay: '2s', duration: '5.5s' },
  { symbol: '🗄️', top: '50%', left: '92%', size: '2rem', delay: '0.5s', duration: '6.5s' },
  { symbol: '🌐', top: '65%', left: '6%', size: '2.3rem', delay: '1.5s', duration: '7.5s' },
  { symbol: '📁', top: '80%', left: '88%', size: '2rem', delay: '2.5s', duration: '6s' },
  { symbol: '🧠', top: '25%', left: '50%', size: '1.8rem', delay: '3s', duration: '8s' },
  { symbol: '📈', top: '90%', left: '40%', size: '2.1rem', delay: '1.2s', duration: '6.8s' },
  { symbol: '🔧', top: '10%', left: '45%', size: '1.9rem', delay: '2.2s', duration: '7.2s' },
  { symbol: '🐙', top: '70%', left: '55%', size: '2rem', delay: '0.8s', duration: '6.2s' },
];

function FloatingIcons() {
  return (
    <div className="floating-icons">
      {icons.map((icon, i) => (
        <span
          key={i}
          className="floating-icon"
          style={{
            top: icon.top,
            left: icon.left,
            fontSize: icon.size,
            animationDelay: icon.delay,
            animationDuration: icon.duration,
          }}
        >
          {icon.symbol}
        </span>
      ))}
    </div>
  );
}

export default FloatingIcons;