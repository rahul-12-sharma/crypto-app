import MiniChart from './MiniChart';

const CryptoRow = ({ asset, index }) => {
  return (
    <tr className="border-t dark:border-gray-700">
      <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm truncate max-w-[120px]">{index}</td>
      <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm truncate max-w-[120px]"> <img src={asset.logo} alt={asset.name} className="h-5 w-5 sm:h-6 sm:w-6 mx-auto" /></td>
      <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm truncate max-w-[120px]">{asset.name}</td>
      <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm truncate max-w-[120px]">{asset.symbol}</td>
      <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm truncate max-w-[120px]">${asset.price.toFixed(2)}</td>
      <td className={`px-4 py-2 ${asset.change1h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {asset.change1h.toFixed(2)}%
      </td>
      <td className={`px-4 py-2 ${asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {asset.change24h.toFixed(2)}%
      </td>
      <td className={`px-4 py-2 ${asset.change7d >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {asset.change7d.toFixed(2)}%
      </td>
      <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm truncate max-w-[120px]">${(asset.marketCap / 1e9).toFixed(1)}B</td>
      <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm truncate max-w-[120px]">${(asset.volume24h / 1e9).toFixed(1)}B</td>
      <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm truncate max-w-[120px]">{asset.circulatingSupply.toLocaleString()}</td>
      <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm truncate max-w-[120px]">{asset.maxSupply.toLocaleString()}</td>
      <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm truncate max-w-[120px]">
        <MiniChart data={asset.priceHistory} />
      </td>
    </tr>
  );
};

export default CryptoRow;
