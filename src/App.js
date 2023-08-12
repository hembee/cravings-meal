import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";


function App() {
  return (
    <Router>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Landing} />
    </Router>
  );
}

export default App;
