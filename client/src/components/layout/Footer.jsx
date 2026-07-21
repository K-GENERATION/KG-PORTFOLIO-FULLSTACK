function Footer() {
  const anneeActuelle = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {anneeActuelle} Kingson Guerrier. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;