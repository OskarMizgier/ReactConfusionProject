import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent/MenuComponent';
import { DISHES } from './Shared/dishes';
import DishDetail from './DishDetailComponent/DishDetailComponent';

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
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <div className='container'>
          <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>
            </div>
      );
    }
  }
  
  export default Main;