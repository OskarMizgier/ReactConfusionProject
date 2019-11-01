import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, } from 'reactstrap';
import DISHES from '../Shared/dishes';


class DishDetail extends Component {
constructor(props) {
    super(props)

}




render () {
              if(this.props.selectedDish != null) {
            return (
            <div className='row'>
            <div className='col-12 col-md-5'>
            <Card>
                <CardImg src={this.props.selectedDish.image} alt='' />
                <CardBody>
                    <CardTitle>{this.props.selectedDish.name}</CardTitle>
                    <CardText>{this.props.selectedDish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            </div>
                )
        } else 
            return <div>
                 </div>
    }
    
}
        

    

export default DishDetail;








