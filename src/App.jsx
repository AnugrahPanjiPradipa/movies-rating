import React, { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import axios from 'axios';

const App = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [selectedFilm, setSelectedFilm] = useState(null);

  const APIKEY = import.meta.env.VITE_APP_TMDB_API_KEY;

  const fetchFilms = useCallback(async () => {
    try {
      const endpoint = debouncedSearch ? 'search' : 'discover';
      const response = await axios.get(`https://api.themoviedb.org/3/${endpoint}/movie?language=en-US&sort_by=popularity.desc&page=${page}&api_key=${APIKEY}`, {
        params: {
          query: debouncedSearch || undefined,
        },
      });

      const newFilms = response.data.results;

      setFilms((prev) => [...prev, ...newFilms]);

      if (newFilms.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching film data:', error);
    }
  }, [page, APIKEY, debouncedSearch]);

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    setFilms([]);
    setPage(1);
    setHasMore(true);
    setSelectedFilm(null);
  }, [debouncedSearch]);

  return (
    <div className="flex flex-col h-screen bg-black overflow-hidden">
      <Navbar
        search={search}
        setSearch={setSearch}
        films={films}
      />
      <div className="flex-grow min-h-0">
        <Body
          films={films}
          setPage={setPage}
          hasMore={hasMore}
          selectedFilm={selectedFilm}
          setSelectedFilm={setSelectedFilm}
        />
      </div>
    </div>
  );
};

export default App;
