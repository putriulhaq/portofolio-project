import React from 'react';// src/App.jsx


interface SpotifyPlayerProps {
    trackId: string;
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ trackId }) => {
    return (
        <iframe
          style={{ borderRadius: '12px' }}
          src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`}
          width="100%"
          height="352"
          allowFullScreen={true}
          allow="autoplay; picture-in-picture"
          loading="lazy"
        ></iframe>
      );
}

export default SpotifyPlayer;