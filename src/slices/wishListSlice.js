import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    wishList:[],
    isLoading:''

}

export const fetchWishList = createAsyncThunk('fetchWishList',async(id)=>{
    const responce= await fetch(`https://localhost:44326/api/UserWishlists/${id}`, {
       method: 'GET'
    });
   return responce.json();
});

export const removeWishList = createAsyncThunk('removeWishList',async(data)=>{
  
    const responce= await fetch(`https://localhost:44326/api/UserWishlists/${data.uid}`+`/${data.pid}`, {
       method: 'DELETE'
    });
   return responce.json();
});

export const addWishList = createAsyncThunk('addWishList',async(data)=>{
  
    const responce= await fetch(`https://localhost:44326/api/UserWishlists`, {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
       body:JSON.stringify(data),
    });
   return responce.json();
});

export const wishListSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        // fetch all product 
        builder.addCase(fetchWishList.pending,(state,action)=>{
            console.log("pending")
            state.isLoading=true;
        }),
        builder.addCase(fetchWishList.fulfilled,(state,action)=>{
            console.log("fullfill")
          state.isLoading=false;
          state.wishList= action.payload
        }),
        builder.addCase(fetchWishList.rejected,(state,action)=>{
            console.log("error",action.payload)
           state.isError=true
        }),
        builder.addCase(removeWishList.pending,(state,action)=>{
            console.log("pending")
            state.isLoading=true;
        }),
        builder.addCase(removeWishList.fulfilled,(state,action)=>{
            console.log("fullfill")
          state.isLoading=false;
        }),
        builder.addCase(removeWishList.rejected,(state,action)=>{

        }),
        builder.addCase(addWishList.pending,(state,action)=>{
            console.log("pending")
            state.isLoading=true;
        }),
        builder.addCase(addWishList.fulfilled,(state,action)=>{
            console.log("fullfill")
          state.isLoading=false;
        }),
        builder.addCase(addWishList.rejected,(state,action)=>{
            console.log("error",action.payload)
           state.isError=true
        })
    }
})

export const {} = wishListSlice.actions

export default wishListSlice.reducer