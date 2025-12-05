const FavFilms = ({ setSelectedFilm, deleteFav, favorites }) => {
  const sum = favorites.reduce((acc, fav) => acc + fav.vote_average, 0);
  const average = favorites.length > 0 ? sum / favorites.length : 0;

  return (
    <div>
      <h1 className="flex justify-center items-center text-center py-4 font-bold text-black">YOUR FAVORITE FILMS</h1>
      <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
          <span className="bg-gray-800 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">{favorites.length}</span>
          <span className="text-sm font-medium text-gray-600">{favorites.length > 1 ? 'Favorites' : 'Favorite'}</span>
        </div>
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-sm ${
            average >= 7 ? 'bg-green-50 border-green-200 text-green-700' : average >= 5 ? 'bg-yellow-50 border-yellow-200 text-yellow-700' : 'bg-red-50 border-red-200 text-red-700'
          }`}
        >
          <span className="text-sm font-bold">⭐ {average.toFixed(1)}</span>
          <span className="text-xs opacity-75">Average</span>
        </div>
      </div>

      <ul className="text-black divide-y divide-gray-300 w-full p-0">
        {favorites.length === 0 ? (
          <div className="flex justify-center items-center text-center md:h-105 h-25 text-gray-600">Add some films to your favorites here</div>
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
                className="w-24 h-36 rounded-md shadow"
              />
              <div className="flex flex-col gap-2">
                <h5 className="font-bold">{item.title}</h5>
                📅{new Date(item.release_date).getFullYear()}
                <p className="text-sm text-gray-600">⭐ {item.vote_average.toFixed(1)} / 10</p>
                <button
                  className="w-20 flex items-center justify-center rounded-full bg-red-200 text-red-600 hover:bg-red-300 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteFav(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FavFilms;
