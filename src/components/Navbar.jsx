import movie from '../assets/img/movie.png';
import NumResults from './NumResults';

const Navbar = ({ search, setSearch, films }) => {
  return (
    <nav className="bg-gray-800 border-b border-gray-700 px-6 py-3 flex items-center">
      <div className="flex items-center gap-2">
        <img
          src={movie}
          alt="Movie Logo"
          className="h-8 w-8"
        />
        <span className="text-normal md:text-2xl font-medium text-amber-50 whitespace-nowrap">Movies Rating</span>
      </div>
      <div className="flex flex-1 justify-center md:pl-0">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="w-[150px] md:w-1/3 border border-gray-600 bg-amber-50 text-black rounded-xl px-3 py-1 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>
      <div className="md:w-[170px] w-[40px]">
        <NumResults films={films} />
      </div>
    </nav>
  );
};

export default Navbar;
