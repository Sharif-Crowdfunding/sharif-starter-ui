import axios from "axios";
import React, { useContext, useReducer, useCallback } from "react";
import urls from "../common/urls";
import { useAuth } from "./auth";

export const GET_AUCTIONS = "GET_AUCTIONS";
export const MARKET_REFRESH = "MARKET_REFRESH";
export const MARKET_REFRESH_SUCCESS = "MARKET_REFRESH_SUCCESS";
export const AUCTION_DETAILS_SUCCESS = "AUCTION_DETAILS_SUCCESS";
export const AUCTION_DETAILS = "AUCTION_DETAILS";

const initialState = {
  count: 0,
  isLoading: false,
  auctions: [],
  auctionDetails: {
    id: 0,
    details: null,
  },
};

const marketReducer = (state = initialState, action) => {
  switch (action.type) {
    case MARKET_REFRESH:
      return {
        ...state,
        isLoading: true,
      };
    case MARKET_REFRESH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        auctions: action.payload,
      };
    case AUCTION_DETAILS:
      return {
        ...state,
        isLoading: true,
        auctionDetails: {
          id: action.payload,
          details: null,
        },
      };
    case AUCTION_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        auctionDetails: {
          id: state.auctionDetails.id,
          details: action.payload,
        },
      };
    default:
      return state;
  }
};

const context = React.createContext();

const MarketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(marketReducer, initialState);

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};

const useMarketReducer = () => useContext(context);

export { MarketProvider, useMarketReducer };
