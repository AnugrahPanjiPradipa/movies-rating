import Plus from '../assets/img/plus.svg';
import Check from '../assets/img/check.svg';

const FilmDesc = ({ selectedFilm, setSelectedFilm, addFav, deleteFav, favorites }) => {
  function handleClose() {
    setSelectedFilm(null);
  }

  const isFavorite = selectedFilm ? favorites.some((fav) => fav.id === selectedFilm.id) : false;

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 py-2 w-full h-full overflow-y-auto scrollbar-hide">
      {selectedFilm ? (
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
                <p className="text-black px-4">Rating: ⭐ {Math.round(selectedFilm.vote_average)} / 10</p>
              </div>
            </div>
            <p className="text-black px-4 py-4 text-center">{selectedFilm.overview}</p>
            {isFavorite ? (
              <button
                className="bg-blue-500 p-2 rounded-2xl flex flex-row items-center gap-2 hover:bg-blue-600 hover:scale-105 duration-150"
                onClick={() => deleteFav(selectedFilm.id)}
              >
                <img
                  src={Plus}
                  alt="Plus"
                  className="w-5 h-5"
                />
                Delete from favorites
              </button>
            ) : (
              <button
                className="bg-green-500 p-2 rounded-2xl flex flex-row items-center gap-2 hover:bg-green-600 duration-150"
                onClick={() => addFav(selectedFilm)}
              >
                <img
                  src={Check}
                  alt="Check"
                  className="w-5 h-5"
                />
                Add to favorites
              </button>
            )}
          </div>
        </div>
      ) : (
        <ul className="text-black divide-y divide-gray-300 w-full p-0">
          <h1 className="flex justify-center items-center text-center py-4 font-bold">YOUR FAVORITE FILMS</h1>
          {favorites.length === 0 ? (
            <div className="flex justify-center items-center text-center h-140 text-gray-600">Add some films to your favorites here</div>
          ) : (
            favorites.map((item) => (
              <li
                key={item.title}
                className="px-4 py-2 flex flex-row gap-2 cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedFilm(item)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                  alt={item.title}
                  className="w-16 h-24 rounded-md shadow"
                />
                <div className="flex flex-col">
                  <h5 className="font-bold">{item.title}</h5>
                  📅{new Date(item.release_date).getFullYear()}
                  <div className="pt-2">
                    <p className="text-sm text-gray-600">⭐ {Math.round(item.vote_average)} / 10</p>
                  </div>
                </div>
                <button
                  className="w-6 h-6 flex items-center justify-center rounded-full bg-red-200 text-red-600 hover:bg-red-300 "
                  onClick={deleteFav}
                >
                  ✕
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default FilmDesc;
