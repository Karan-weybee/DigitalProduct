import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    tags:[],
    isError:''

}

export const fetchTags = createAsyncThunk('fetchTags',async()=>{
    const responce= await fetch(`https://localhost:44326/api/Tags`, {
       method: 'GET'
    });
   return responce.json();
});

export const tagSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchTags.pending,(state,action)=>{
            console.log("pending")
        }),
        builder.addCase(fetchTags.fulfilled,(state,action)=>{
            console.log("fullfill")
          state.tags= action.payload
          console.log(state.tags)
          state.isError="";
        }),
        builder.addCase(fetchTags.rejected,(state,action)=>{
            console.log("fullfill")
            state.isError="Invalid email or password"
        })
    }

})

export const {} = tagSlice.actions

export default tagSlice.reducer
