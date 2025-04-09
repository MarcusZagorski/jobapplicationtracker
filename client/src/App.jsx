import { useState } from "react";
import "./App.css";
import PageLoad from "./components/PageLoad/PageLoad";
import Login from "./pages/Login";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setInterval(() => setIsLoading(false), 3000);
  return <>{isLoading ? <PageLoad /> : <Login />}</>;
}

export default App;
