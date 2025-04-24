import btcLogo from '../assets/btc.png';
import ethLogo from '../assets/eth.png';
import usdtLogo from '../assets/usdt.png';
import bnbLogo from '../assets/bnb.png';
import xrpLogo from '../assets/xrp.png';
import adaLogo from '../assets/ada.png';
import dogeLogo from '../assets/doge.png';
import chartImg from '../assets/chart.svg';

const baseAssets = [
    { name: 'Bitcoin', symbol: 'BTC', logo: btcLogo },
    { name: 'Ethereum', symbol: 'ETH', logo: ethLogo },
    { name: 'Tether', symbol: 'USDT', logo: usdtLogo },
    { name: 'BNB', symbol: 'BNB', logo: bnbLogo },
    { name: 'XRP', symbol: 'XRP', logo: xrpLogo },
    { name: 'Cardano', symbol: 'ADA', logo: adaLogo },
    { name: 'Dogecoin', symbol: 'DOGE', logo: dogeLogo },
];

function generatePriceHistory(basePrice = 20000) {
    let history = [];
    for (let i = 0; i < 7; i++) {
        const delta = getRandomDelta(basePrice);
        basePrice += delta;
        history.push(parseFloat((basePrice).toFixed(2)));
    }
    return history;
}

export const generateInitialCryptoData = () =>
    baseAssets.map((asset) => {
        const price = getRandomPrice();
        return {
            ...asset,
            price,
            priceHistory: generatePriceHistory(price),  // ✅
            change1h: getRandomPercent(),               // ✅
            change24h: getRandomPercent(),              // ✅
            change7d: getRandomPercent(),               // ✅
            marketCap: getRandomNumber(50_000_000_000, 900_000_000_000),
            volume24h: getRandomNumber(1_000_000_000, 100_000_000_000),
            circulatingSupply: getRandomNumber(1_000_000, 20_000_000),
            maxSupply: 21_000_000,
        };
    });

export const updateCryptoData = (assets) =>
    assets.map((asset) => {
        const newPrice = asset.price + getRandomDelta(asset.price);
        const newHistory = [...asset.priceHistory.slice(1), newPrice]; // ✅

        return {
            ...asset,
            price: newPrice,
            priceHistory: newHistory,        // ✅ important for charts
            change1h: getRandomPercent(),
            change24h: getRandomPercent(),
            change7d: getRandomPercent(),
            volume24h: getRandomNumber(1_000_000_000, 100_000_000_000),
        };
    });





function getRandomPrice() {
    return Math.random() * 30000 + 1000;
}
function getRandomPercent() {
    return (Math.random() - 0.5) * 10;
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomDelta(base) {
    return (Math.random() - 0.5) * base * 0.01;
}
