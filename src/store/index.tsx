import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState: any[] = [
  {
    id: "bitcoin",
    transactions: [
      {
        transactionID: Math.random() * 300,
        value: 10,
        quantity: 12,
        currentPrice: 54,
      },
      {
        transactionID: Math.random() * 300,
        value: 10,
        quantity: 12,
        currentPrice: 54,
      },
    ],
  },
  {
    id: "terra-luna",
    transactionProperty: {
      value: 10,
      quantity: 12,
      currentPrice: 54,
    },
  },
];

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: initialState,
  reducers: {
    addTransaction(state, action) {
      state.map((transaction) => {
        if (transaction.id === action.payload.id) {
          transaction.transactions.push(action.payload.transactionProperty);
        }
      });
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;

export const store = configureStore({
  reducer: {
    transactions: transactionsSlice.reducer,
  },
});
