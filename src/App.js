import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
