import React, { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import axios from 'axios';

const App = () => {
  const [films, setFilms] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);
  const [search, setSearch] = useState('');

  const APIKEY = import.meta.env.VITE_APP_TMDB_API_KEY;

  const fetchFilms = useCallback(async () => {
    try {
      const endpoint = search ? 'search' : 'discover';
      const response = await axios.get(`https://api.themoviedb.org/3/${endpoint}/movie?language=en-US&sort_by=popularity.desc&page=${page}&api_key=${APIKEY}`, {
        params: {
          query: search || undefined,
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
  }, [page, APIKEY, search]);

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  useEffect(() => {
    setFilms([]);
    setPage(1);
    setHasMore(true);
  }, [search]);

  return (
    <div className="flex flex-col h-screen bg-black overflow-hidden">
      <Navbar
        search={search}
        setSearch={setSearch}
      />
      <div className="flex-grow min-h-0">
        <Body
          films={films}
          setPage={setPage}
          hasMore={hasMore}
        />
      </div>
    </div>
  );
};

export default App;
