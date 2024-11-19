import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Invoice } from "../../types";

interface InvoicesState {
  data: Invoice[];
}

const initialState: InvoicesState = { data: [] };

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    setInvoices: (state, action: PayloadAction<Invoice[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setInvoices } = invoicesSlice.actions;
export default invoicesSlice.reducer;
