import React, { useReducer, useEffect } from "react";
import { AppRouter } from "./routes/AppRouter";
import { AuthContext } from "./context/AuthContext";
import { AuthReducer } from "./context/AuthReducer";
import "../src/assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "../src/components/ui/Header";

// llamado de boton sin importar categoria de boostrap
// <button className="btn btn-primary">Hola Mundo</button>

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

function App() {
  const [user, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div className="App">
      <br></br>
      <br /> <br />
      <Headers />
      <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
