import axios from "axios";
import React, { useContext, useReducer, useCallback } from "react";
import urls from "../common/urls";
import { useAuth } from "./auth";

export const GET_AUCTIONS = "GET_AUCTIONS";
export const GET_MARKET_AUCTION = "GET_AUCTIONS";

const initialState = {
  count: 0,
  isLoading: false,
  marketAuctions: [],
};

const auctionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MARKET_AUCTION:
      return {
        ...state,
      };

    default:
      return state;
  }
};

const context = React.createContext();

const AuctionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(auctionReducer, initialState);

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};

const useAuctionReducer = () => useContext(context);

export { AuctionProvider, useAuctionReducer };
