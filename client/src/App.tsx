import "./App.css";
import "./css/main.css"
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import { TriviaProvider } from "./contexts/TriviaContext";

function App() {
  return (
    <BrowserRouter>
      <TriviaProvider>
        <Router />
      </TriviaProvider>
    </BrowserRouter>
  );
}

export default App;
