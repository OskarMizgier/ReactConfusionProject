import React from 'react';
import Home from './HomeComponent/HomeComponent'
import Menu from './MenuComponent/MenuComponent';
import { DISHES, } from './Shared/dishes';
import { COMMENTS } from './Shared/comments'
import { LEADERS } from './Shared/leaders'
import { PROMOTIONS } from './Shared/promotions'
import DishDetail from './DishDetailComponent/DishDetailComponent';
import Header from './HeaderComponent/HeaderComponent'
import Footer from './FooterComponent/FooterComponent'
import { Switch, Route, Redirect } from 'react-router-dom'
import Contact from './ContactComponent/ContactComponent'

class Main extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          dishes: DISHES,
          comments: COMMENTS,
          promotions: PROMOTIONS,
          leaders: LEADERS,
      };
    }
  

  
    render() {
      //HomeComponent 
      const HomePage = () => {
        return (
          <Home dish={this.state.dishes.filter((dish) => dish.featured )[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured )[0]}
          leader={this.state.leaders.filter((leader) => leader.featured )[0]} />
        )
      }

      const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
      };

      return (
        <div>
         <Header />
         <Switch>
            <Route path='/home' component={() => < HomePage />} />
            <Route exact path='/menu'component={() => <Menu dishes={this.state.dishes} /> } />
            <Route path='/menu/:dishId' component={DishWithId}></Route>
            <Route exact path='/contactus' component={Contact} />
            <Redirect to='/home' />
         </Switch>
          <Footer />
          </div>
      );
    }
  }
  
  export default Main;
