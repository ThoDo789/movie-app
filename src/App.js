import "./App.css";
import GlobalStyle from "../src/globalStyles";
import Header from "./components/Hearder";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
    </Router>
  );
}

export default App;
