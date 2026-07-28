function CertificateCard({ image, titre, institution }) {
  return (
    <div className="certificate-card">
      <div className="certificate-image">
        <img src={image} alt={titre} />
      </div>
      <h4>{titre}</h4>
      {institution && <p>{institution}</p>}
    </div>
  );
}

export default CertificateCard;