import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    tokenName:'',
    isError:''

}

export const loginUser = createAsyncThunk('loginUser',async(data)=>{
    const formData = {
        "email": data.email,
        "password": data.password
    };
    const responce= await fetch(`https://localhost:44326/api/Users/Login`, {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
       body:JSON.stringify(formData),
    });
   return responce.json();
});

export const signUpUser = createAsyncThunk('signUpUser',async(data)=>{
    const formData = {
        "email": data.email,
        "password": data.password
    };
    const responce= await fetch(`https://localhost:44326/api/Users`, {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
       body:JSON.stringify(formData),
    });
   console.log(responce)
   return responce.json();
});


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserId:(state,action)=>{
            state.user=action.payload.uid;
            console.log(state.user)
        },
        resetUserId:(state)=>{
            state.user=null;
            console.log(state.user)
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(loginUser.pending,(state,action)=>{
            console.log("pending")
        }),
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            console.log("fullfill")
          state.user= action.payload.userId
          state.tokenName=action.payload.tokenName
          console.log(state.tokenName)
          console.log(state.user)
          state.isError="";
        }),
        builder.addCase(loginUser.rejected,(state,action)=>{
            console.log("rejected")
            state.isError="Invalid email or password"
        }),
        builder.addCase(signUpUser.pending,(state,action)=>{
            console.log("pending")
        }),
        builder.addCase(signUpUser.fulfilled,(state,action)=>{
            console.log("fullfill")
          state.user= action.payload.userId
          state.tokenName=action.payload.tokenName
          console.log(state.user)
          state.isError="";
        }),
        builder.addCase(signUpUser.rejected,(state,action)=>{
            console.log("fullfill")
            state.isError="User is available please login"
        })
    }

})

export const userSelector = {
    getUser : (state)=>{ 
        console.log(state.user)
        return state.user;
    }
}

export const {setUserId,resetUserId} = userSlice.actions

export default userSlice.reducer