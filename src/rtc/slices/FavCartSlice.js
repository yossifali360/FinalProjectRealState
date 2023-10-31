import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { myAxios } from "../../MainServices/api";
import { getUsersApi, getUsersFavCart } from "../../MainServices/authentication";
import { json } from "react-router-dom";

export const getFavCart = createAsyncThunk("favCart/getFavCart" , async (id) =>{
    return await getUsersFavCart(id);
})

const initialState ={
    favCart :[],
    isLoading : false,
}
const favCartSlice = createSlice({
name:"favCart",
initialState,
reducers:{
    addItem : (state , action) =>{
        const productObj = state.favCart.find(ele => ele.id === action.payload.id)
        if (!productObj){
            state.favCart.push({...action.payload})
        }
    },
    removeItem : (state , action) =>{
        state.favCart = state.favCart.filter(ele => ele.id != action.payload)
    },
    removeAllItems : (state) =>{
        state.favCart = [];
    }
},
extraReducers:(builder) =>{
    builder.addCase(getFavCart.fulfilled,(state,action) =>{
        console.log(action.payload);
        state.favCart = action.payload;
    })
}
})

const favCartReducer = favCartSlice.reducer;

// export const {} = favCartSlice.actions;
export default favCartReducer;