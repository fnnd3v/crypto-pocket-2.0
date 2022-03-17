import { createSlice, configureStore } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

//FIXME: add update current price on load
const initialState: any[] = [
  {
    id: "terra-luna",
    img: "https://assets.coingecko.com/coins/images/8284/large/luna1557227471663.png",
    symbol: "LUNA",
    currentPrice: 90,
    name: "Terra",
    transactions: [
      {
        transactionID: uuid(),
        quantity: 100,
        pricePerCoin: 4,
        transactionBoughtValue: 400,
      },
    ],
  },
];

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
        //FIXME: all last transaction updates current price
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

    removeTransactionProperty(state, action) {
      const index = state.findIndex((coin) => coin.id === action.payload.coin);

      //deleting whole coin
      if (state[index].transactions.length === 1) {
        return state.filter((coin) => coin.id !== action.payload.coin);
      }

      const transactionIndex = state[index].transactions.findIndex(
        (value: any) => value.transactionID === action.payload.transactionID
      );

      state[index].transactions.splice(transactionIndex, 1);
    },
  },
});

export const { addTransaction, removeTransactionProperty } =
  transactionsSlice.actions;

export const store = configureStore({
  reducer: {
    transactions: transactionsSlice.reducer,
  },
});
