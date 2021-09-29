import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import Menu from './components/Menu/Menu';
import ItemDetails from './components/ItemDetails/ItemDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar></NavigationBar>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/menu">
            <Menu></Menu>
          </Route>

          <Route exact path="/item/:id">
            <ItemDetails></ItemDetails>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
