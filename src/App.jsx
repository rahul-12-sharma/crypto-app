import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateAssets } from './redux/cryptoSlice';
import CryptoTable from './components/CryptoTable';
import SearchBar from './components/SearchBar'


function App() {
  const dispatch = useDispatch();

  

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateAssets());
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (

    <div className="min-h-screen dark:bg-gray-900 dark:text-red px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-600">
          📘 Real-Time Crypto Tracker
        </h1>

        <SearchBar />

        <div className="overflow-x-auto mt-4 rounded-md border dark:border-gray-700">
          <CryptoTable />
        </div>
      </div>
    </div>
  );
}

export default App
