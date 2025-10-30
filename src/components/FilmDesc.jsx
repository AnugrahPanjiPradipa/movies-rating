// import React, { useState } from 'react';

const FilmDesc = ({ selectedFilm }) => {
//      
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 py-2 w-full h-full overflow-y-auto scrollbar-hide">
      {selectedFilm ? (
        <div className="flex flex-col items-center p-1">
          <div className="flex flex-row">
            <img
              src={`https://image.tmdb.org/t/p/w300${selectedFilm.poster_path}`}
              alt={selectedFilm.title}
              className="w-32 h-48 rounded-md shadow"
            ></img>
            <div className="flex flex-col">
              <h2 className="font-bold px-4 py-2 text-black">{selectedFilm.title}</h2>
              <p className="text-black px-4">{selectedFilm.release_date}</p>
              <p className="text-black px-4">{selectedFilm.genres}</p>
              <p className="text-black px-4">Rating: ⭐ {Math.round(selectedFilm.vote_average)} / 10</p>
            </div>
          </div>
          <p className="text-black px-4 py-4 text-center">{selectedFilm.overview}</p>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-500">Select a film to see details</p>
        </div>
      )}
    </div>
  );
};

export default FilmDesc;
