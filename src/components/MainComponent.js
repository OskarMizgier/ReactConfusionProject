import React from 'react';
import Menu from './MenuComponent/MenuComponent';
import { DISHES } from './Shared/dishes';
import DishDetail from './DishDetailComponent/DishDetailComponent';
import Header from './HeaderComponent/HeaderComponent'
import Footer from './FooterComponent/FooterComponent'

class Main extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          dishes: DISHES,
          selectedDish: null
      };
    }
  
    onDishSelect(dishId) {
      this.setState({ selectedDish: dishId});
    }
  
    render() {
      return (
        <div>
         <Header />
         <div className='container'>
          <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
          </div>
          <Footer />
          </div>
      );
    }
  }
  
  export default Main;
