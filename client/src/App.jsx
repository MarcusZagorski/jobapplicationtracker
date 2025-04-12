import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";

function App() {
  const [loginSuccess, setLoginSuccess] = useState(null);

  const loginComponent = <Login loginSuccess={loginSuccess} setLoginSuccess={setLoginSuccess} />;

  return !loginSuccess ? (
    <Login loginSuccess={loginSuccess} setLoginSuccess={setLoginSuccess} />
  ) : (
    <p>Dashboard page</p>
  );
}

export default App;
