import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
