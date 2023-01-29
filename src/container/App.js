import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../providers/auth";
import { ProjectProvider } from "../providers/project";
import { WalletProvider } from "../providers/wallet";
import routes from "./routes";

export const App = () => {
  return (
    <AuthProvider>
      <ProjectProvider>
        <WalletProvider>
            <BrowserRouter>
              <Routes>
                {routes.map((route, index) => {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      element={
                        <route.layout>
                          <route.component />
                        </route.layout>
                      }
                    />
                  );
                })}
              </Routes>
            </BrowserRouter>
        </WalletProvider>
      </ProjectProvider>
    </AuthProvider>
  );
};

export default App;
