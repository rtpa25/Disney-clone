import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import { selectUserName } from "./store/user-slice";
import Detail from "./components/Details";

//Any components where you navigate between pages has to go inside BrowserRouter
const App = () => {
  const userName = useSelector(selectUserName);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            {userName && <Home />}
            {!userName && <Redirect to="/" />}
          </Route>
          <Route path="/detail/:id">
            {userName && <Detail />}
            {!userName && <Redirect to="/" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
