import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";
import LogouButton from "./components/LogouButton";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) <h1>Loading...</h1>
  return (
    <div className="App">
      <h1>Aplicattion</h1>
      {isAuthenticated ? <LogouButton /> 
      : <LoginButton />}

      <Profile />
    </div>
  );
}

export default App;
