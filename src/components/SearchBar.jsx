import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/cryptoSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by name or symbol..."
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-white"
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </div>
  );
};

export default SearchBar;
