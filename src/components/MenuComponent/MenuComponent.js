import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from '../DishDetailComponent/DishDetailComponent';

class Menu extends Component {
  //Contsructor 
    constructor(props) {
        super(props)
        this.state = {
            selectedDish : null,
        }
    }

    onDishSelect (dish) {
        this.setState({ selectedDish: dish })
    }


render () {
    const Menu = this.props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                        onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                </Card>
            </div>
        );
    });

    return (
            <div className='row'>
                    {Menu}
            </div>
        );
    }
}


export default Menu; 