import React, { useReducer, useEffect } from "react";
import { AppRouter } from "./routes/AppRouter";
import { AuthContext } from "./context/AuthContext";
import { AuthReducer } from "./context/AuthReducer";
import "bootstrap/dist/css/bootstrap.min.css";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

const App = () => {
  const [user, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default App;
