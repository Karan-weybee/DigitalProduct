import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    Products: [],
    Product:{},
    categories:[],
    minmax:[],
    pricerange:[],
    search:'',
    isLoading:false,
    isError:false
}

export const updateProduct = createAsyncThunk('updateProduct',async(data)=>{
    
    const responce= await fetch(`https://localhost:44326/api/products/${data.id}`, {
       method: 'PUT',
       body: data.formData
    });
   return responce.json();
});

export const removeProduct = createAsyncThunk('removeProduct',async(id)=>{
    
    const responce= await fetch(`https://localhost:44326/api/products/${id}`, {
       method: 'DELETE'
    });
   return responce.json();
});

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
        },
        setCategories:(state,action)=>{
            state.categories= action.payload
        },
        removeCategories : (state,action)=>{
            state.categories= state.categories.filter((tag)=>tag != action.payload);
            console.log(state.categories)
        },
        applySearch : (state,action)=>{
            state.search = action.payload;
        },
        applyPriceRange : (state,action)=>{
            console.log(action.payload)
            state.pricerange=action.payload
            console.log(state.pricerange)
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

          const minPrice = state.Products.reduce((min, product) => {
            return product.price < min ? product.price : min;
        }, state.Products[0].price);

        const maxPrice = state.Products.reduce((max, product) => {
            return product.price > max ? product.price : max;
        }, state.Products[0].price);

        state.minmax = [minPrice,maxPrice]
        state.pricerange =  [minPrice,maxPrice]
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
            console.log("fullfill product")
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
        }),

        // edit product 
         builder.addCase(updateProduct.pending,(state,action)=>{
            console.log("pending")
            state.isLoading=true;
        }),
        builder.addCase(updateProduct.fulfilled,(state,action)=>{
            console.log("fullfill")
          state.isLoading=false;
        }),
        builder.addCase(updateProduct.rejected,(state,action)=>{
            console.log("error",action.payload)
           state.isError=true
        }),

         // delete product 
         builder.addCase(removeProduct.pending,(state,action)=>{
            console.log("pending")
            state.isLoading=true;
        }),
        builder.addCase(removeProduct.fulfilled,(state,action)=>{
            console.log("fullfill")
            state.Products = state.Products.filter((product)=>product.id != action.payload.id);
        }),
        builder.addCase(removeProduct.rejected,(state,action)=>{
            console.log("error",action.payload)
           state.isError=true
        })

    }

})

export const {addFeatureImages,setCategories,removeCategories,applySearch,applyPriceRange} = productSlice.actions

export default productSlice.reducer