import { ThreeDot } from 'react-loading-indicators';
import InfiniteScroll from 'react-infinite-scroll-component';

const FilmList = ({ films, hasMore, setPage, setSelectedFilm }) => {
  return (
    <div
      id="scrollable"
      className="bg-white rounded-2xl shadow-md border border-gray-200 py-2 w-full h-full overflow-y-auto scrollbar-hide"
    >
      <InfiniteScroll
        dataLength={films.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={hasMore}
        loader={
          <div className="flex justify-center items-center h-20">
            <ThreeDot
              color="#32cd32"
              size="small"
            />
          </div>
        }
        scrollableTarget="scrollable"
      >
        <ul className="text-black divide-y divide-gray-300 w-full p-0">
          {films.length === 0 ? (
            <div className="flex justify-center items-center h-140">
              <ThreeDot
                color="#32cd32"
                size="medium"
              />
            </div>
          ) : (
            films.map((item) => (
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
                  <h5>{item.title}</h5>
                  📅{new Date(item.release_date).getFullYear()}
                  <div className="pt-2">
                    <p className="text-sm text-gray-600">⭐ {Math.round(item.vote_average)} / 10</p>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default FilmList;
