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

    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">📘 Real-Time Crypto Tracker</h1>
      <SearchBar />
      <div className="overflow-x-auto">
        <CryptoTable />
      </div>
    </div>
  );
}

export default App
