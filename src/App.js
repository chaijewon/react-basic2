import logo from './logo.svg';
import './App.css';
import {Component,Fragment} from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import Location from "./components/seoul/Location";
import Nature from "./components/seoul/Nature";
import Shop from "./components/seoul/Shop";
import FoodList from "./components/food/FoodList";
/*
      Routes = Controller
      Route  = @RequestMapping

      <Route exact path={"/"} element={<Home/>}/>
                  -----------        ----------- return "home"
 */
class App extends Component{
  render(){
    return (
        <Router>
          <Header/>
          <div className={"container"}>
            <Routes>
                <Route exact path={"/"} element={<Home/>}/>
                <Route path={"/seoul/location"} element={<Location/>}/>
                <Route path={"/seoul/nature"} element={<Nature/>}/>
                <Route path={"/seoul/shop"} element={<Shop/>}/>
                <Route path={"/food/food_list/:cno"} element={<FoodList/>}/>
            </Routes>
          </div>
        </Router>
    )
  }
}
export default App;
