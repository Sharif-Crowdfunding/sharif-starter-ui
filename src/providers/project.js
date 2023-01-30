import axios from "axios";
import React, { useContext, useReducer, useCallback } from "react";
import urls from "../common/urls";
import { useAuth } from "./auth";

export const MY_PROJECT_REFRESH = "MY_PROJECT_REFRESH";
export const REFRESH_SUCCESS = "REFRESH_SUCCESS";

const initialState = {
  count: 0,
  isLoading: false,
  projects: [],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_PROJECT_REFRESH:
      return {
        ...state,
        isLoading: true,
      };

    case REFRESH_SUCCESS:
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
};

const context = React.createContext();

const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);
  const { user } = useAuth();

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};

const useProjectReducer = () => useContext(context);

export { ProjectProvider, useProjectReducer };
