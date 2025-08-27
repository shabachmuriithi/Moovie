"use client"
import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';

import { useFetchMovies } from './hooks/useFetchMovie';


const Home: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const { movies, loading, error, favorites, toggleFavorite } = useFetchMovies(searchQuery);

  const handleSearch = (query: string) => {
    setSearchQuery(query || null);
  };

  return (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        color: '#fff',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Head>
        <title>MooVie</title>
      </Head>
      <Header onSearch={handleSearch} />
      <main style={{ padding: '20px' }}>
        <div
          style={{
            backgroundColor: '#000',
            padding: '20px',
            textAlign: 'center',
            borderBottom: '2px solid #f1c40f',
          }}
        >
          <h1 style={{ fontSize: '36px', margin: 0 }}>Maleficent: Mistress of Evil</h1>
          <p style={{ color: '#f1c40f' }}>Action, Adventure, Fantasy</p>
        </div>
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            padding: '10px',
            backgroundColor: '#000',
            color: '#f1c40f',
            borderBottom: '1px solid #333',
          }}
        >
          <a href="#">Most Viewed</a>
          <a href="#">Comedy</a>
          <a href="#">Action</a>
          <a href="#">Series</a>
          <a href="#">Adventure</a>
          <a href="#">Other</a>
          <a href="#">View All</a>
        </nav>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <div>
            <h2 style={{ marginBottom: '10px', color: '#f1c40f' }}>
              {searchQuery ? 'Search Results' : 'Most Viewed'}
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '20px',
              }}
            >
              {movies.map((movie) => (
                <div key={movie.id} style={{ textAlign: 'center', position: 'relative' }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <h3 style={{ margin: '10px 0' }}>{movie.title}</h3>
                  <p style={{ margin: '5px 0' }}>{movie.release_date}</p>
                  <Button onClick={() => toggleFavorite(movie.id)} variant={favorites.includes(movie.id) ? 'secondary' : 'primary'}>
                    {favorites.includes(movie.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;