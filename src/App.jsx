import React from 'react';
import ArtistDetails from '/components/Artist/ArtistDetails';
import { artists } from './best-selling-music-artists';
import HeaderDetails from '../components/Header/HeaderDetails';

const App = () => {
  return (
    <>
    <div className="app">
    <HeaderDetails/>
        <div className="artist-list">
            {artists.map((artist, index) => (
                <ArtistDetails key={index} artist={artist} />
            ))}
        </div>
    </div>
    </>
  );
};

export default App;