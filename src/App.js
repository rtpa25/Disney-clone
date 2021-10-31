import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";

//Any components where you navigate between pages has to go inside BrowserRouter
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
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
