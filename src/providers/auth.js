import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import urls from "../common/urls";
import { useFetch } from "../common/useFetch";

const context = React.createContext();

const AuthProvider = ({ children }) => {
  const { loading, error, data } = useFetch(urls.auth.profile(), "GET");

  const [logoutState, setLogoutState] = useState(() => ({
    loading: false,
    error: undefined,
    success: false,
  }));
  const [user, setUser] = useState(() => ({
    isLoading: loading,
    isAuthenticated: !error,
    data: data,
  }));

  useEffect(() => {
    if (loading || !data) {
      setUser({
        isLoading: loading,
        isAuthenticated: false,
        data: data,
      });
    } else {
      setUser({
        isLoading: loading,
        isAuthenticated: !error,
        data: data,
      });
    }
  }, [data, loading, error]);

  useEffect(() => {
    if (logoutState.success)
      setUser({ isLoading: false, isAuthenticated: false, data: null });
  }, [logoutState]);
  const logout = async () => {
    if (!error) {
      try {
        setLogoutState((prev) => ({
          ...prev,
          loading: true,
        }));
        await axios({
          method: "GET",
          url: urls.auth.logout(),
          withCredentials: true,
        });
        setLogoutState((prev) => ({
          ...prev,
          success: true,
          loading: false,
        }));
      } catch (e) {
        console.log(e);
        setLogoutState((prev) => ({
          ...prev,
          error: e,
          loading: false,
        }));
      }
    }
  };

  return (
    <context.Provider value={{ user, logout, logoutState }}>
      {children}
    </context.Provider>
  );
};

const useAuth = () => useContext(context);

export { AuthProvider, useAuth };
