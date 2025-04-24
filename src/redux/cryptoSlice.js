import { createSlice } from '@reduxjs/toolkit';
import { generateInitialCryptoData, updateCryptoData } from '../utils/dataGenerator';

const initialState = {
    assets: generateInitialCryptoData(),  // ✅ important!
    search: '',
};


const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        updateAssets(state) {
            state.assets = updateCryptoData(state.assets);
        },
        setSearch(state, action) {
            state.search = action.payload;
        },
    },

});

export const selectFilteredAssets = (state) => {
    const term = state.crypto.search.toLowerCase();
    return state.crypto.assets.filter(
        (asset) =>
            asset.name.toLowerCase().includes(term) ||
            asset.symbol.toLowerCase().includes(term)
    );
};

export const { updateAssets, setSearch } = cryptoSlice.actions;
export default cryptoSlice.reducer;
