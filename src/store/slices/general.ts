import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {},
});

const { reducer } = generalSlice;
export default reducer;
