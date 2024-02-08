import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    Products: [],
    Product:{},
    isLoading:false,
    isError:false
}


export const addProduct = createAsyncThunk('addProduct',async(formData)=>{
    const responce= await fetch('https://localhost:44326/api/products', {
       method: 'POST',
       body: formData
    });
   return responce.json();
});


export const fetchProducts = createAsyncThunk('fetchProducts',async()=>{
      const responce= await fetch('https://localhost:44326/api/products', {
         method: 'GET'
      });
     return responce.json();
});

export const fetchProduct = createAsyncThunk('fetchProduct',async(id)=>{
    const responce= await fetch(`https://localhost:44326/api/products/${id}`, {
       method: 'GET'
    });
   return responce.json();
});

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addFeatureImages : (state,action)=>{
            var product= [state.Product].map((product)=>{product.featureImages=[...product.featureImages,...action.payload]})
           
            // state.Product = product[0]
        }
    },
    extraReducers:(builder)=>{
        // fetch all product 
        builder.addCase(fetchProducts.pending,(state,action)=>{
            console.log("pending")
            state.isLoading=true;
        }),
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            console.log("fullfill")
          state.isLoading=false;
          state.Products= action.payload
        }),
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            console.log("error",action.payload)
           state.isError=true
        }),

        // fetch single product 
        builder.addCase(fetchProduct.pending,(state,action)=>{
            console.log("pending")
            state.isLoading=true;
        }),
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            console.log("fullfill")
          state.isLoading=false;
          state.Product= action.payload
        }),
        builder.addCase(fetchProduct.rejected,(state,action)=>{
            console.log("error",action.payload)
           state.isError=true
        }),

        // add product 
        builder.addCase(addProduct.pending,(state,action)=>{
            console.log("pending")
            state.isLoading=true;
        }),
        builder.addCase(addProduct.fulfilled,(state,action)=>{
            console.log("fullfill")
          state.isLoading=false;
          state.data= action.payload
        }),
        builder.addCase(addProduct.rejected,(state,action)=>{
            console.log("error",action.payload)
           state.isError=true
        })
    }

})



export const {addFeatureImages} = productSlice.actions

export default productSlice.reducer