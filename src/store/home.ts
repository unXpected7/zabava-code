import axios from 'axios';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Istate } from "@/utils/interface";

const urlOpenSea =  process.env.OPENSEA_API_URL;
const keyOpenSea = process.env.OPENSEA_API_KEY;

const initialState: Istate = {
  isLoading: false,
  error: {},
  dataNFTs: {},
  next: "",
  stats: {},
  profile: {},
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = { error: action.payload };
    },
    updateData: (state, action: PayloadAction<any>) => {
      state.dataNFTs = action.payload;
    },
    setFloorPrice: (state, action: PayloadAction<any>) => {
      state.stats = action.payload;
    },
    setProfile: (state, action: PayloadAction<any>) => {
      state.profile = action.payload;
    },
  },
});

export const { setLoading, setError, updateData, setFloorPrice, setProfile } = homeSlice.actions;

const fetchData = async (url: string, headers?: Record<string, string>, params?: Record<string, any>) => {
  try {
    const response = await axios.get(url, { headers, params });
    return response.data;
  } catch (error) {
    let errorMsg = "An error occurred.";
    if (error.response) {
      errorMsg = error.response.data.message;
    } else if (error.request) {
      errorMsg = "No response was received";
    }
    throw new Error(errorMsg);
  }
};

export const getNFts = (collectionName: string, limitProp: number, nextProp?: string) => {
  return async (dispatch: Function) => {
    dispatch(setLoading(true));
    const url = `${urlOpenSea}collection/${collectionName}/nfts`;
    try {
      const data = await fetchData(url, { accept: 'application/json', 'X-API-KEY': keyOpenSea }, { limit: limitProp, next: nextProp });
      dispatch(updateData(data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export const getFloorPrice = (collectionName: string) => {
  return async (dispatch: Function) => {
    dispatch(setLoading(true));
    const url = `${urlOpenSea}collections/${collectionName}/stats`;
    try {
      const data = await fetchData(url, { accept: 'application/json', 'X-API-KEY': keyOpenSea });
      dispatch(setFloorPrice(data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export const getProfile = (collectionName: string) => {
  return async (dispatch: Function) => {
    dispatch(setLoading(true));
    const url = `${urlOpenSea}collections/${collectionName}/nfts`;
    try {
      const data = await fetchData(url, { accept: 'application/json', 'X-API-KEY': keyOpenSea });
      dispatch(setProfile(data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export default homeSlice.reducer;
