import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Customer } from "../../types";

interface CustomersState {
  data: Customer[];
}

const initialState: CustomersState = { data: [] };

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    setCustomers: (state, action: PayloadAction<Customer[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setCustomers } = customersSlice.actions;
export default customersSlice.reducer;
