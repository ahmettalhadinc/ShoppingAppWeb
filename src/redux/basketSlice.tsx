import { createAsyncThunk, createSlice,PayloadAction  } from '@reduxjs/toolkit'
import axios from "axios";
 export interface ItemInfo {
  id: number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  quantity: number;

}

export interface ItemsInBasket {
  id: number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  quantity: number;

}

interface ProductsState {
  products: ItemInfo[];
  itemsInBaskett:ItemsInBasket[]
 
}

const initialState: ProductsState = {
products:[],
itemsInBaskett:[]
}
export const fetchProducts = createAsyncThunk<ItemInfo[]>(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);


export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<ItemsInBasket>) => {
      state.itemsInBaskett.push(action.payload);
    },
   
   
  },
  extraReducers:(builder)=>{

    builder
    .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ItemInfo[]>) => {
      state.products = action.payload;
    })
  }
})

// Action creators are generated for each case reducer function
export const { addToBasket} = basketSlice.actions

export default basketSlice.reducer