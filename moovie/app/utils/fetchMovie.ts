export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export const fetchPopularMovies = async (): Promise<Movie[]> => {
  const url = `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/popular`;
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...(process.env.NEXT_PUBLIC_TMDB_API_KEY && { 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}` }) },
  });
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const url = `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/search/movie`;
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...(process.env.NEXT_PUBLIC_TMDB_API_KEY && { 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}` }) },
    params: { query: encodeURIComponent(query) },
  });
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const data = await response.json();
  return data.results;
};