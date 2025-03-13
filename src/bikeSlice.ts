// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import axios from "axios";
//
// const initialState = {
//     bikes: [],
// };
//
// export const fetchBikes = createAsyncThunk(
//     'bikes/fetchBikes',
//     async function(_,) {
//             const data = await axios.get("http://localhost:8080/bikes");
//
//             console.log(data.data)
//
//             return data;
//     }
// );
//
//
//
// export const bikeSlice = createSlice({
//     name: "bikes",
//     initialState,
//     reducers: {
//         getBikes: (state, action) => {
//         }
//     },
// })
//
// export const {getBikes} = bikeSlice.actions;
//
// export default bikeSlice.reducer;
//
//
//


