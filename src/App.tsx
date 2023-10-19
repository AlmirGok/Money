import React, { useEffect, useState } from "react";
import "./App.css";
import { Login } from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Home from "./pages/home";
import AuthService from "./services/AuthServrice";
import Loading from "./components/loading";
import { Navigate } from "react-router-dom";

type AppProps = {
  authService: AuthService;
};

function App(props: AppProps) {
  const [isLoadingLoggedUser, setIsLoadingLoggedUser] = useState(true);
  const [user, setUser] = useState(null as any);

  useEffect(() => {
    props.authService
      .getLoggedUser()
      .then((user) => {
        setIsLoadingLoggedUser(false);
        setUser(user);
      })
      .catch((error) => {
        setIsLoadingLoggedUser(false);
      });
  }, []);

  return (
    <>
      {!isLoadingLoggedUser && (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                !user ? (
                  <Login authService={new AuthService()} />
                ) : (
                  <Navigate to={"home"} />
                )
              }
            />

            <Route
              path="/home"
              element={user ? <Home /> : <Navigate to={"/"} />}
            />

            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      )}
      {isLoadingLoggedUser && <Loading />}
    </>
  );
}

export default App;
