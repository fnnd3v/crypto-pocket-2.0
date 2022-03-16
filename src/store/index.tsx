import { createSlice, configureStore } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState: any[] = [];

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: initialState,
  reducers: {
    addTransaction(state, action) {
      const index = state.findIndex((coin) => coin.id === action.payload.id);

      // console.log(action.payload);

      if (index === -1) {
        state.push({
          id: action.payload.id,
          img: action.payload.img,
          symbol: action.payload.symbol,
          currentPrice: action.payload.currentPrice,
          name: action.payload.name,
          transactions: [
            {
              transactionID: uuid(),
              quantity: parseFloat(action.payload.transactionProperty.quantity),
              pricePerCoin: parseFloat(
                action.payload.transactionProperty.pricePerCoin
              ),
              transactionBoughtValue:
                action.payload.transactionProperty.transactionTotalValue,
            },
          ],
        });
      }

      if (index !== -1) {
        state[index].transactions.push({
          transactionID: uuid(),
          quantity: parseFloat(action.payload.transactionProperty.quantity),
          pricePerCoin: parseFloat(
            action.payload.transactionProperty.pricePerCoin
          ),
          transactionBoughtValue:
            action.payload.transactionProperty.transactionTotalValue,
        });
      }
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;

export const store = configureStore({
  reducer: {
    transactions: transactionsSlice.reducer,
  },
});
