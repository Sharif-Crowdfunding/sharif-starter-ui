import React, { useContext, useReducer } from "react";

export const GET_AUCTIONS = "GET_AUCTIONS";
export const MARKET_REFRESH = "MARKET_REFRESH";
export const MARKET_REFRESH_SUCCESS = "MARKET_REFRESH_SUCCESS";
export const AUCTION_DETAILS_SUCCESS = "AUCTION_DETAILS_SUCCESS";
export const AUCTION_DETAILS = "AUCTION_DETAILS";
export const LIKE_AUCTION = "LIKE_AUCTION";
export const CANCEL_AUCTION = "CANCEL_AUCTION";
export const END_AUCTION = "END_AUCTION";

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
    case CANCEL_AUCTION:
      var auctions = state.auctions;
      for (let i = 0; i < auctions.length; i++) {
        const element = auctions[i];
        if (element.id === action.payload) {
          auctions[i].is_canceled = true;
        }
      }
      return {
        ...state,
        auctions: auctions,
      };
    case END_AUCTION:
      var auctions = state.auctions;
      for (let i = 0; i < auctions.length; i++) {
        const element = auctions[i];
        if (element.id === action.payload) {
          auctions[i].is_ended = true;
        }
      }
      return {
        ...state,
        auctions: auctions,
      };

    case LIKE_AUCTION:
      var auctions = state.auctions;
      for (let i = 0; i < auctions.length; i++) {
        const element = auctions[i];
        if (element.id === action.payload) {
          auctions[i].is_liked = true;
        }
      }
      return {
        ...state,
        auctions: auctions,
      };
    default:
      return state;
  }
};

const context = React.createContext();

const MarketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(marketReducer, initialState);

  return (
    <context.Provider value={{ marketState: state, dispatch }}>{children}</context.Provider>
  );
};

const useMarketReducer = () => useContext(context);

export { MarketProvider, useMarketReducer };
