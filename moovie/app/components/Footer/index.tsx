const Footer = () => {
  return (
    <footer
      style={{
        padding: '20px',
        backgroundColor: '#000',
        textAlign: 'center',
        color: '#fff',
        borderTop: '2px solid #f1c40f',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
        <div>Download App</div>
        <div>Navigation</div>
        <div>Legal</div>
        <div>Contact Us</div>
        <div>Share Movie</div>
      </div>
      <p>&copy; 2025 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;