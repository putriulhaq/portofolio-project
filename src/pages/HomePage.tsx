import React from 'react';
import imageProfil from '../assets/pooh.png'; // Sesuaikan path sesuai lokasi gambar Anda
import SpotifyPlayer from '../components/music';

const HomePage: React.FC = () => {
  const trackId = '1k1Bqnv2R0uJXQN4u6LKYt' 
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '50px', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <h2>Dhiya'Ulhaq Putri Kinanty </h2>
        <h1>Software Engineer</h1>
        <p>This is the landing page of my portfolio website.</p>
        <button onClick={() => alert('Learn More Clicked!')}>Learn More</button>
        <SpotifyPlayer trackId={trackId}></SpotifyPlayer>
      </div>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <img src={imageProfil} alt="Profile" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
      </div>
    </div>
  );
};

export default HomePage;
