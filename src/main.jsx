import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const server = "https://nodejs-todo-0qmk.onrender.com/api/v1";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Context.Provider
      value={{ isAuthenticated, setIsAuthenticated, loading, setLoading }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
