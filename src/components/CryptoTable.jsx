import { useSelector } from 'react-redux';
import CryptoRow from './CryptoRow';
import { selectFilteredAssets } from '../redux/cryptoSlice'; 

const CryptoTable = () => {
  // Use the selector to get filtered assets
  const assets = useSelector(selectFilteredAssets); // <-- Change this line

  return (
    <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-100 text-gray-700">
        <tr className="text-sm font-semibold">
          <th className="px-4 py-2">#</th>
          <th className="px-4 py-2">Logo</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Symbol</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">1h %</th>
          <th className="px-4 py-2">24h %</th>
          <th className="px-4 py-2">7d %</th>
          <th className="px-4 py-2">Market Cap</th>
          <th className="px-4 py-2">24h Volume</th>
          <th className="px-4 py-2">Circulating</th>
          <th className="px-4 py-2">Max</th>
          <th className="px-4 py-2">7D Chart</th>
        </tr>
      </thead>
      <tbody className="text-center text-sm">
        {assets.length > 0 ? (
          assets.map((asset, index) => (
            <CryptoRow key={asset.symbol} asset={asset} index={index + 1} />
          ))
        ) : (
          <tr>
            <td colSpan="13" className="py-6 text-center text-gray-500">
              No results found 🔍
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CryptoTable;
