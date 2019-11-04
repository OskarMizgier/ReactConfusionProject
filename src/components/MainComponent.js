import React from 'react';
import Home from './HomeComponent/HomeComponent'
import Menu from './MenuComponent/MenuComponent';
import { DISHES } from './Shared/dishes';
import DishDetail from './DishDetailComponent/DishDetailComponent';
import Header from './HeaderComponent/HeaderComponent'
import Footer from './FooterComponent/FooterComponent'
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          dishes: DISHES,
          selectedDish: null
      };
    }
  

  
    render() {
      //HomeComponent 
      const HomePage = () => {
        return (
          <Home />
        )
      }

      return (
        <div>
         <Header />
         <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/menu'component={() => <Menu dishes={this.state.dishes} /> } />
            <Redirect to='/home' />
         </Switch>
          <Footer />
          </div>
      );
    }
  }
  
  export default Main;
