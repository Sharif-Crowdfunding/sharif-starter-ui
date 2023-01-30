import axios from "axios";
import React, { useContext, useReducer, useCallback } from "react";
import urls from "../common/urls";
import { useAuth } from "./auth";

export const MY_PROJECT_REFRESH = "MY_PROJECT_REFRESH";
export const REFRESH_SUCCESS = "REFRESH_SUCCESS";
export const UPDATE_STAGE = "UPDATE_STAGE";

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
    case UPDATE_STAGE:
      let ps = [...state.projects];
      for (let index = 0; index < ps.length; index++) {
        const element = ps[index];
        if (element.id === action.payload.id)
          ps[index].token_info.development_stage = action.payload.step;
      }
      return {
        ...state,
        projects: [...ps],
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
