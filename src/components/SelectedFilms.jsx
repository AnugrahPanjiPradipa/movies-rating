import Plus from '../assets/img/plus.svg';
import Remove from '../assets/img/close.svg';
import { Heart, Trash2 } from 'lucide-react';
import { useEffect } from 'react';

const SelectedFilms = ({ selectedFilm, setSelectedFilm, deleteFav, addFav, favorites }) => {
  const isFavorite = selectedFilm ? favorites.some((fav) => fav.id === selectedFilm.id) : false;

  useEffect(() => {
    document.title = `Movie | ${selectedFilm.title}`;

    return function () {
      document.title = 'Movies Rating';
    };
  });

  function handleClose() {
    setSelectedFilm(null);
  }

  return (
    <div>
      <div className="flex justify-end px-2">
        <button
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-black transition"
          onClick={handleClose}
        >
          ✕
        </button>
      </div>
      <div className="flex flex-col items-center p-4">
        <div className="flex flex-row gap-4">
          <img
            src={`https://image.tmdb.org/t/p/w300${selectedFilm.poster_path}`}
            alt={selectedFilm.title}
            className="w-32 h-48 rounded-md shadow"
          ></img>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl px-4 text-black">{selectedFilm.title}</h1>
            <p className="text-black px-4">{selectedFilm.release_date}</p>
            <p className="text-black px-4">Rating: ⭐ {selectedFilm.vote_average.toFixed(1)} / 10</p>
          </div>
        </div>
        <p className="text-black px-4 py-4 text-center">{selectedFilm.overview}</p>
        {isFavorite ? (
          <button
            onClick={() => deleteFav(selectedFilm.id)}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all active:scale-95"
          >
            <Trash2 size={18} />
            <span className="font-medium">Remove Favorite</span>
          </button>
        ) : (
          <button
            onClick={() => addFav(selectedFilm)}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all active:scale-95"
          >
            <Heart size={18} />
            <span className="font-medium">Add Favorite</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default SelectedFilms;
