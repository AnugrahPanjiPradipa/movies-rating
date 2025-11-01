const FavFilms = ({ setSelectedFilm, deleteFav, favorites }) => {
  return (
    <ul className="text-black divide-y divide-gray-300 w-full p-0">
      <h1 className="flex justify-center items-center text-center py-4 font-bold">YOUR FAVORITE FILMS</h1>
      {favorites.length === 0 ? (
        <div className="flex justify-center items-center text-center h-120 text-gray-600">Add some films to your favorites here</div>
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
              <p className="text-sm text-gray-600">⭐ {Math.round(item.vote_average)} / 10</p>
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
  );
};

export default FavFilms;
