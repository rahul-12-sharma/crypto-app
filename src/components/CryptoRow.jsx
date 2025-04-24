import MiniChart from './MiniChart';

const CryptoRow = ({ asset, index }) => {
  return (
    <tr className="border-t dark:border-gray-700">
      <td className="px-4 py-2">{index}</td>
      <td className="px-4 py-2"><img src={asset.logo} alt={asset.name} className="h-6 w-6 mx-auto" /></td>
      <td className="px-4 py-2">{asset.name}</td>
      <td className="px-4 py-2">{asset.symbol}</td>
      <td className="px-4 py-2">${asset.price.toFixed(2)}</td>
      <td className={`px-4 py-2 ${asset.change1h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {asset.change1h.toFixed(2)}%
      </td>
      <td className={`px-4 py-2 ${asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {asset.change24h.toFixed(2)}%
      </td>
      <td className={`px-4 py-2 ${asset.change7d >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {asset.change7d.toFixed(2)}%
      </td>
      <td className="px-4 py-2">${(asset.marketCap / 1e9).toFixed(1)}B</td>
      <td className="px-4 py-2">${(asset.volume24h / 1e9).toFixed(1)}B</td>
      <td className="px-4 py-2">{asset.circulatingSupply.toLocaleString()}</td>
      <td className="px-4 py-2">{asset.maxSupply.toLocaleString()}</td>
      <td className="px-4 py-2">
        <MiniChart data={asset.priceHistory} />
      </td>
    </tr>
  );
};

export default CryptoRow;
