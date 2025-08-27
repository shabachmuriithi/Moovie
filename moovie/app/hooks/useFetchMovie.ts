"use client"
import { useState, useEffect } from 'react';
import { fetchPopularMovies, searchMovies, Movie } from '../utils/fetchMovie';



export const useFetchMovies = (initialQuery?: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const data = initialQuery ? await searchMovies(initialQuery) : await fetchPopularMovies();
        setMovies(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, [initialQuery]);

  const toggleFavorite = (movieId: number) => {
    setFavorites((prev) =>
      prev.includes(movieId) ? prev.filter((id) => id !== movieId) : [...prev, movieId]
    );
  };

  return { movies, loading, error, favorites, toggleFavorite };
};