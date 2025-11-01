import FavFilms from './FavFilms';
import SelectedFilms from './SelectedFilms';

const FilmDesc = ({ selectedFilm, setSelectedFilm, addFav, deleteFav, favorites }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 py-2 w-full h-full overflow-y-auto scrollbar-hide">
      {selectedFilm ? (
        <SelectedFilms
          selectedFilm={selectedFilm}
          setSelectedFilm={setSelectedFilm}
          addFav={addFav}
          deleteFav={deleteFav}
          favorites={favorites}
        />
      ) : (
        <FavFilms
          setSelectedFilm={setSelectedFilm}
          deleteFav={deleteFav}
          favorites={favorites}
        />
      )}
    </div>
  );
};

export default FilmDesc;
