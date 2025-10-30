import React, { useState } from 'react';
import Plus from '../assets/img/plus.svg';
import Check from '../assets/img/check.svg';

const FilmDesc = ({ selectedFilm, setSelectedFilm }) => {
  const [addFav, setAddFav] = useState(true);

  function handleAddFav() {
    setAddFav(!addFav);
  }

  function handleClose() {
    setSelectedFilm(null);
  }

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
            {addFav ? (
              <button
                className="bg-blue-500 p-2 rounded-2xl flex flex-row items-center gap-2 hover:bg-blue-600 hover:scale-105 duration-150"
                onClick={handleAddFav}
              >
                <img
                  src={Plus}
                  alt="Plus"
                  className="w-5 h-5"
                />
                Add to favorites
              </button>
            ) : (
              <button className="bg-green-500 p-2 rounded-2xl flex flex-row items-center gap-2 hover:bg-green-600 duration-150">
                <img
                  src={Check}
                  alt="Check"
                  className="w-5 h-5"
                />
                Already in favorites
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-500">Please add your favorite films</p>
        </div>
      )}
    </div>
  );
};

export default FilmDesc;
