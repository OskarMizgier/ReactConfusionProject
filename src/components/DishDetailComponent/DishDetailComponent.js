import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, } from 'reactstrap';
import DISHES from '../Shared/dishes';
import './DishDetail.css';


class DishDetail extends Component {
constructor(props) {
    super(props)

}





renderDish () {
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
        <div id='CommentClass' className='col-12 col-md-5'>
            <Card>
            <CardBody>
                <CardTitle>Comments:</CardTitle>
                    {   this.props.selectedDish.comments.map((comment) => {
                        return <ul key={comment.id} className='list-unstyled'>
                                <li>{comment.author + ' ' + comment.date.substring(0, 10) }</li>
                                 <li>{comment.comment}</li>
                                    </ul>
                    })}
            </CardBody>

            </Card>


        </div>
          
        </div>
            )
    } else 
        return <div>
             </div>
}


render () {
            return (this.renderDish(this.props.selectedDish)
        
            )


           
                 
    }
    
}
        

    

export default DishDetail;








