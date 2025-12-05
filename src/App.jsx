import React, { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Grain from './assets/videos/bg-film.mp4';
import axios from 'axios';

const App = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites-movie');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

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

  function handleAddFav(film) {
    if (!favorites.some((fav) => fav.id === film.id)) {
      const newFav = [...favorites, film];
      setFavorites(newFav);
      localStorage.setItem('favorites-movie', JSON.stringify(newFav));
    }
  }

  function handleDeleteFav(filmID) {
    const newFav = favorites.filter((film) => film.id !== filmID);
    setFavorites(newFav);
    localStorage.setItem('favorites-movie', JSON.stringify(newFav));
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed -z-10 w-full h-full object-cover"
      >
        <source
          src={Grain}
          type="video/mp4"
        />
      </video>
      <Navbar
        search={search}
        setSearch={setSearch}
        films={films}
      />
      <div className="grow min-h-0">
        <Body
          films={films}
          setPage={setPage}
          hasMore={hasMore}
          selectedFilm={selectedFilm}
          setSelectedFilm={setSelectedFilm}
          addFav={handleAddFav}
          deleteFav={handleDeleteFav}
          favorites={favorites}
        />
      </div>
    </div>
  );
};

export default App;
