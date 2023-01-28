import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

export const App = () => {
  return (
    <HashRouter>
      {/* <AuthProvider>
          <ProjectProvider>
            <WalletProvider> */}
      <Routes>
        {
        routes.map((route, index) => {
          console.log(route);
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={
                route.layout ? (
                  <route.layout>
                    <route.component />
                  </route.layout>
                ) : (
                  <route.component />
                )
              }
            />
          );
        })}
      </Routes>
      {/* </WalletProvider>
          </ProjectProvider>
        </AuthProvider> */}
    </HashRouter>
  );
};

export default App;
