import FilmDesc from './FilmDesc';
import FilmList from './FilmList';

const Body = ({ films, hasMore, setPage, selectedFilm, setSelectedFilm, addFav, deleteFav, favorites }) => {
  return (
    <div className="flex h-full w-full text-amber-50 justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-4 md:w-1/2 w-full h-full justify-center items-center">
        <FilmList
          films={films}
          hasMore={hasMore}
          setPage={setPage}
          setSelectedFilm={setSelectedFilm}
        />

        <FilmDesc
          selectedFilm={selectedFilm}
          setSelectedFilm={setSelectedFilm}
          addFav={addFav}
          deleteFav={deleteFav}
          favorites={favorites}
        />
      </div>
    </div>
  );
};

export default Body;
